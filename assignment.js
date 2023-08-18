document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('color');

    button.addEventListener('click', function() {
        let nameset = "aries";
        let emailset = "ariestank9@gmail.com";
        const name1 = document.getElementById('name').value;
        const email1 = document.getElementById('email').value;
        const password1 = document.getElementById('Password').value;
        const repassword1 = document.getElementById('Repassword').value;

        if (nameset !== name1 || emailset !== email1 || password1 !== repassword1) {
            alert("Something Went Wrong");
        } else {
            alert("Successful");
        }
    });
});

// function color and colorless is just a style.You don't have to use it.(By ARIES).
function color(){
    document.getElementById("color").style.backgroundColor="black";
    document.getElementById("color").style.color="white";
    
}
function colorless(){
    document.getElementById("color").style.backgroundColor="transparent";
    document.getElementById("color").style.color="black";
    
}