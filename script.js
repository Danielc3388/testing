// Replace YOUR_CLIENT_ID with your Google OAuth client ID
const CLIENT_ID = '416638786885-hiqcbtrbp09mt3qb1hik9pe8bi8bl5c9.apps.googleusercontent.com';

function loginWithPassword(event) {
  event.preventDefault();
  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic here...
  // For this example, we'll just redirect to a success page
  window.location.href = 'success.html';
}

function loginWithGoogle() {
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
    alert('Error logging in with Google. Please try again.');
  });
}

function initGoogleAuth() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: CLIENT_ID
    });
  });
}

// Call initGoogleAuth() once the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  initGoogleAuth();
});
