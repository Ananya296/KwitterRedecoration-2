// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUisz2o5vYt_2y0Zixh7-CSrtgxT4aSm4",
  authDomain: "kwitterproject-6f2b4.firebaseapp.com",
  projectId: "kwitterproject-6f2b4",
  storageBucket: "kwitterproject-6f2b4.appspot.com",
  messagingSenderId: "799917658745",
  appId: "1:799917658745:web:84d2b487d24aaab8bc7aa8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
        {
          purpose : "adding room name"
        });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";

}
