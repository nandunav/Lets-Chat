
const firebaseConfig = {
      apiKey: "AIzaSyDEXneBqwnY73fh4VMM2pJsYgssszjXv90",
      authDomain: "kwitter-5e983.firebaseapp.com",
      databaseURL: "https://kwitter-5e983-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e983",
      storageBucket: "kwitter-5e983.appspot.com",
      messagingSenderId: "707577131406",
      appId: "1:707577131406:web:9c136841a90650615a34df",
      measurementId: "G-KDQ3GYL639"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
