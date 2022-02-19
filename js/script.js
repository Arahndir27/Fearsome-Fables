//Age game API handler
document.getElementById("age-submit").addEventListener("click", function (event) {
    //Prevent page refresh
    event.preventDefault();
    //Get the name the user input
    const name = document.getElementById("age-input").value;
    //console.log("Name: " + name);
    //Stop if they didn't input anything
    if (name === "") {
        return;
    }

    //Assuming the person is located in the US for more accurate data
    const url = "https://api.agify.io?name=" + name + "&country_id=US";
    //console.log("URL: " + url);
    fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        let result = "";
        result += "<h3>" + json.name + "</h3>";
        if (json.age != null) {
            result += "<p>We guess that you are " + json.age + " years old!</p><p>How close were we?</p>";
        }
        else {
            result += "<p>We don't have any information on your name. Do you have another one you can try?</p>";
        }
        document.getElementById("game-results").innerHTML = result;
    });
});

///////////////////////////////////////////////////////////////////////////////////////

//Background API handler
function getBG() {
    const url = "https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&json";
    fetch(url).then(function(response) {
        
    })
}