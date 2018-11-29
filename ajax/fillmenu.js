$(document).ready(function () {  
  var json_obj = $.parseJSON(JSON.stringify(portfolio));

  $.each(portfolio, function(i, item) {
    var re = new RegExp('[^"\t]+', 'g')
    var topic = re.exec(JSON.stringify(i))
    $(".menu").append("<li><b>" + topic + "</b><ul id=" + topic + "></ul></li><br>");
    var topicHTML = "#" + topic;

    $.each(item, function(j, inside) {
      if (typeof inside === 'object') {
        subtopic = "#" + j;
        console.log(subtopic)
        $(topicHTML).append("<li><b>" + j + "</b><ul id=" + j + "></ul></li><br>");
        $.each(inside, function(k, interior) {
          $(subtopic).append("<li><b>" + k + "</b> &nbsp; " + interior + "</li>");
        });
      }
      else {
        $(topicHTML).append("<li><b>" + j + "</b> &nbsp; " + inside + "</li>");
      };
    });
  });
});