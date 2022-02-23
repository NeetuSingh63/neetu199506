// console.log("this is working");
// var x = "hello";
// var x = 67;
// let y = 98;
// let y = 98;
// alert(x);
// console.log(y);
// var x;
// for(x=0; x<=5;x++);
// console.log(x)
function validateform(){
    x = document.forms["myform"]["email"].value;
    if (x == ""){
        document.getElementById('email').placeholder = "enter your email";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('valid').innerHTML = "enter your email";
        var x = document.getElementById('valid');
        x.innerHTML = "*enter your email";
        x.style.color = "red";
        return false;
    }

}

function crElement(){
    x = document.getElementsByClassName("myname");
    console.log(x);
    x[0].innerHTML = "heeyyyy";
    x = document.createElement("input");
    z = document.createElement("label");
    x.setAttribute("class", "myname");
    y = document.getElementById("mydiv");
    y.appendChild(x);
    y.appendChild(z); 
}
