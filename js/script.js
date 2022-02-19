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