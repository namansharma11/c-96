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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
document.getElementById("msg").value = "";      
}
