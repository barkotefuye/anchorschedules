var data = new Firebase("https://incandescent-heat-7488.firebaseio.com");
/*var lnn = document.getElementById("lastname").value;
var fn = document.getElementById("firstname").value;
var pw = document.getElementById("password").value;
var un = document.getElementById("username").value;
console.log (fn)*/
function addUser(){
var lnn = document.getElementById("lastname").value;
var fn = document.getElementById("firstname").value;
var pw = document.getElementById("password").value;
var un = document.getElementById("username").value;

/*console.log (fn)*/
    var empty = {};
    empty[un]={           
            "username":un,
            "password": pw,
            "firstname": fn,
            "lastname": lnn};
    console.log(empty)
    data.set(empty);/*{
        :{
            "username":un,
            "password": pw,
            "firstname": fn,
            "lastname": lnn
            
       }
    })*/
}