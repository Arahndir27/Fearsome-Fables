//Age game API handler
document.getElementById("age-submit").addEventListener("click", function (event) {
    //Prevent page refresh
    event.preventDefault();
    //Get the name the user input
    const name = document.getElementById("age-input").value;
    //Stop if they didn't input anything
    if (name === "") {
        return;
    }
})

///////////////////////////////////////////////////////////////////////////////////////

//Background API handler
function getBG() {
    const url = "https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&json";
    fetch(url).then(function(response) {
        
    })
}