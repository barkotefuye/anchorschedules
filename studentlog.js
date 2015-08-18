//var ref = new Firebase("https://incandescent-heat-7488.firebaseio.com");  
/*ref.on("value", function(snapshot){
    console.log(snapshot.val());
});
    */

/*firebaseRef.on('value', function(dataSnapshot) {
  // code to handle new value.
});*/
function go() {
  var userId = document.getElementById("usernm").value;

  checkIfUserExists(userId);
}

var USERS_LOCATION = 'https://incandescent-heat-7488.firebaseio.com';

function userExistsCallback(userId, exists) {
  if (exists) {
      window.location.assign("studentschedule2.html");
    //go to other page where students choose their classes
  } else {
    alert('user ' + userId + ' does not exist!');
    //get that messege up where it says you gotta try again or somin
  }
}

// Tests to see if /users/<userId> has any data. 
function checkIfUserExists(userId) {
  var usersRef = new Firebase(USERS_LOCATION);
  usersRef.child(userId).once('value', function(snapshot) {
    console.log(snapshot.val());
      var exists = (snapshot.val() !== null);
      console.log(snapshot.val);
    userExistsCallback(userId, exists);
  });
}

/*var USERS_LOCATION = '"https://incandescent-heat-7488.firebaseio.com"';

function userExistsCallback(userId, exists) {
  if (exists) {
    alert('user ' + userId + ' exists!');
  } else {
    alert('user ' + userId + ' does not exist!');
  }
}


Tests to see if /users/<userId> has any data. 
function checkIfUserExists(userId) {
  var usersRef = new Firebase(USERS_LOCATION);
  usersRef.child(userId).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
    userExistsCallback(userId, exists);
  });
}


below is the stuff from the website but it only works every time we change something in that data base and we cant just check for it. And below that is when we were still using a google doc. Eventually in the future i think we could convert it back into a google doc by converting the json into a csv.
Get a database reference to our posts
var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
 Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
function init() {
      Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1WA1WIo7ikwuO6VLVyQIzhngsI4RtKMBLo8gtbEispi0/pubhtml',
                     callback: getInfo,
                     simpleSheet: true } );
   }
      function getInfo(data, tabletop) {
      var ps= document.getElementById("password1").value;
      var un = document.getElementById("usernm").value;
      var btn = document.getElementById("btn");
      var err = document.getElementById("error");
      var li = document.getElementById("studentname");
      var i = 0;
      var j = true;

      for(i=0; i<data.length-1; i++){
        if(un == data[i].username && ps == data[i].password){
          console.log(un);
          window.location.assign("studentschedule2.html");
           if(window.location == "studentschedule2.html"){
              window.onload = function(){
                console.log(data[i].Name);
                sn.innerHTML = data[i].Name;
              }
            }
          return true;
        }
        else{
          var j = false;
        }
    }

    if (i + 1 == data.length && j == false){
      err.innerHTML = "incorrect username and password, please try again";
      err.style.fontSize = "50%";
      err.style.color="red";
      //ps.style.borderColor = "red";
      //un.style.borderColor = "red";
    }
  }  */