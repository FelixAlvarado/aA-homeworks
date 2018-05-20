console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
      type: 'GET',
      url:"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b80d6ccc371a9400f3b2de20f87a382d",
      success(data) {
        console.log("We have your weather!")
        console.log(data);
      },
      error() {
        console.error("An error occurred.");
      },
   });
// Add another console log here, outside your AJAX request
console.log("Here comes the weather!!!");
