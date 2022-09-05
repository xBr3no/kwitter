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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}