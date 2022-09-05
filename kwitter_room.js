var firebaseConfig = {
  apiKey: "AIzaSyBFIHkY0dywWGX0RyjxGOjO1aHkFRmvPeI",
  authDomain: "kwitter-3012f.firebaseapp.com",
  databaseURL: "https://kwitter-3012f.firebaseio.com",
  projectId: "kwitter-3012f",
  storageBucket: "kwitter-3012f.appspot.com",
  messagingSenderId: "241475390328",
  appId: "1:241475390328:web:a7f5def40d1498c8b9d68d",
  measurementId: "G-S7GNG82FQ2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 room_name=childKey;
 console.log(room_name);
 var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();




function logout(){
  localStorage.removeItem("user_name");
  window.location="kwitter.html";
  localStorage.removeItem("room_name");
}














var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ " "+ username +   "!";

 function addRoom(){
var room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose: "Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
console.log(room_name);

}
function redirectToRoomName(name){
 console.log(name)
 localStorage.setItem("room_name", name);
 window.location="kwitter_page.html";
}