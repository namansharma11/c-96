// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB2_87bYyObvCTOAv8ncxc7xaYFuB0Xp74",
      authDomain: "p93-c2dd4.firebaseapp.com",
      databaseURL: "https://p93-c2dd4-default-rtdb.firebaseio.com",
      projectId: "p93-c2dd4",
      storageBucket: "p93-c2dd4.appspot.com",
      messagingSenderId: "64981077667",
      appId: "1:64981077667:web:4b9c78b559273b8ef6b916"
    };  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome";+user_name+"!";
function addRoom()
{
 room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}