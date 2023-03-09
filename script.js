// Replace YOUR_CLIENT_ID with your Google OAuth client ID
const CLIENT_ID = '416638786885-f0bp8690k4age0g6c83k3j3gndn3a0de.apps.googleusercontent.com';

function loginWithPassword(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic here...
  // For this example, we'll just redirect to a success page
  window.location.href = 'success.html';
}

gapi.auth2.init({
  client_id: 'YOUR_CLIENT_ID'
}).then(function() {
  // Initialization succeeded
}, function(error) {
  // Initialization failed
});


// Call initGoogleAuth() once the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  initGoogleAuth();
});

function loginWithGoogle() {
  // Check that the gapi object is defined
  if (!gapi) {
    console.error('Google Sign-In API not loaded or initialized');
    alert('Error logging in with Google. Please try again.');
    return;
  }
  
  gapi.auth2.getAuthInstance().signIn().then(function() {
  // Sign-in successful
}, function(error) {
  if (error.error === "popup_closed_by_user") {
    alert('closed by user')
  } else {
    alert('not closed by user')
  }
});


  // Load the Google Sign-In API if it hasn't been loaded yet
  if (!gapi.auth2) {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: CLIENT_ID
      }).then(function() {
        // Authenticate with Google using the Google Sign-In API
        gapi.auth2.getAuthInstance().signIn().then(function() {
          // Get the user's Google profile information
          const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
          const name = profile.getName();
          const email = profile.getEmail();
          
          // Perform authentication logic here...
          // For this example, we'll just redirect to a success page
          window.location.href = 'success.html';
        }, function(error) {
          console.error(error);
          if (error.error === "popup_closed_by_user") {
            alert('You closed the Google Sign-In popup window. Please try again.');
          } else {
            alert('Error logging in with Google. Please try again.');
          }
        });
      });
    });
  } else {
    // Authenticate with Google using the Google Sign-In API
    gapi.auth2.getAuthInstance().signIn().then(function() {
      // Get the user's Google profile information
      const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
      const name = profile.getName();
      const email = profile.getEmail();
      
      // Perform authentication logic here...
      // For this example, we'll just redirect to a success page
      window.location.href = 'success.html';
    }, function(error) {
      console.error(error);
      if (error.error === "popup_closed_by_user") {
        alert('You closed the Google Sign-In popup window. Please try again.');
      } else {
        alert('Error logging in with Google. Please try again.');
      }
    });
  }
}
