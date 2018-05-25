$(document).ready(function() {
  $('submit').on("click",function() {
    var city = $("#cityname").val();
    if (city != '') {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q= " + city + "&units=metric" + "&APPID=dd09610829bad7bf31ea7b22d59e804d",
        type: "get",
        dataType: "jsonp",
        success: function(data) {
          var detail = show(data);
          $("#show").html(detail);
          $("#city").val('');
        }

      });
    } else {
      $("#error").html("<strong>ALERT! </strong>field cannot be empty")
    }
    
  });
});

function show(data) {
  return "<h3 style='font-size:40px; font-weight: bold;text-align:center;' class='text-center'>" + data.name + " , " + data.sys.country + "</h3>" +
    "<h2 style='text-align:center;font-weight: bold;font-size:70px;'> " + data.main.temp + "&deg;C"+"<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></h2>" +
    
    "<h3 style='text-align:center;font-weight: bold;font-size:50px'>" + data.weather[0].main +
    "</h3>" +
     "<h3 style='padding-left:40px;text-align:center;'><strong>Max temp</strong>: " + data.main.temp_max + "&deg;C</h3>" +
    "<h3 style='padding-left:40px;text-align:center;'><strong>Min temp</strong>: " + data.main.temp_min + "&deg;C</h3>" +
    
    "<h3 style='padding-left:40px;text-align:center;'><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
    
    "<h3 style='padding-left:40px;text-align:center;'><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
    "<h3 style='padding-left:40px;text-align:center;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>";
}