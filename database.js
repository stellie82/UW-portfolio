$(document).ready(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCakNntm9AMsnQzfcMwDEQIiSKxVfCnpiY",
        authDomain: "portfolio-contact-7a6fd.firebaseapp.com",
        databaseURL: "https://portfolio-contact-7a6fd.firebaseio.com",
        projectId: "portfolio-contact-7a6fd",
        storageBucket: "portfolio-contact-7a6fd.appspot.com",
        messagingSenderId: "610679125971",
        appId: "1:610679125971:web:b75e9c0aaee71c17912126"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Assign a variable to the reference to the database.
    var database = firebase.database();

    // Create initial variables.
    var visitor;
    var phone;
    var email;
    var message;

    // Create a click button to capture information.
    $(".btn").on("click", function (event) {
        event.preventDefault();

        // Values from text boxes.
        visitor = $("#visitor").val();
        phone = $("#phone").val().trim();
        email = $("#email").val().trim();
        message = $("#message").val();

        // Code for "Setting values in the database"
        database.ref().push({
            visitor: visitor,
            phone: phone,
            email: email,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        visitor = $("#visitor").val("");
        phone = $("#phone").val("");
        email = $("#email").val("");
        message = $("#message").val("");
    });

    // Firebase Watcher
    // database.ref().on("child_added", function (childSnapshot) {
    // Log snapshot information.
    //     console.log(childSnapshot.val());

    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    // });

});