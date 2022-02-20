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
function getRandomBG() {
    console.log("random BG");
    let randomR = Math.floor(Math.random() * 100) + 155;
    let randomG = Math.floor(Math.random() * 100) + 155;
    let randomB = Math.floor(Math.random() * 100) + 155;
    console.log(randomR, " ", randomG, " ", randomB);
    const url = "https://php-noise.com/noise.php?r=" + randomR + "&g=" + randomG + "&b=" + randomB + "&tiles=${tiles}&tileSize=20&borderWidth=10&json";
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        //document.getElementById("this-navbar").style.backgroundColor = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        document.body.style.backgroundImage = "url('" + json.uri + "')";
    })
    let editCSS = document.createElement('style');
    let headFootRGB = "rgb(" + (randomR*.4) + "," + (randomG*.4) + "," + (randomB*.4) + ")";
    editCSS.innerHTML = ".bg-dark {background-color: " + headFootRGB + " !important;}";
    editCSS.innerHTML += ".footer {background-color: " + headFootRGB + ";}";
    document.head.appendChild(editCSS);
    //document.getElementById("footer-java").style.backgroundColor = "rgb(" + (randomR*.7) + "," + (randomG*.7) + "," + (randomB*.7) + ");";
}

function indexBG() {
    console.log("changing bg");
    const url = "https://php-noise.com/noise.php?r=237&g=209&b=255&tiles=${tiles}&tileSize=20&borderWidth=10&json";
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        document.body.style.backgroundImage = "url('" + json.uri + "')";
    })
    let editCSS = document.createElement('style');
    editCSS.innerHTML = ".bg-dark {background-color: #600da0 !important;}";
    editCSS.innerHTML += ".footer {background-color: #600da0;}";
    document.head.appendChild(editCSS);
}