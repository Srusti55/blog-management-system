const form = document.getElementById("blogForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all the fields.");
    }else{
        alert("Form Submitted Successfully!");
    }

});