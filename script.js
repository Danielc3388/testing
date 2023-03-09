// Replace YOUR_CLIENT_ID with your Google OAuth client ID
const CLIENT_ID = '416638786885-hiqcbtrbp09mt3qb1hik9pe8bi8bl5c9.apps.googleusercontent.com';

function loginWithPassword(event) {
  event.preventDefault();
  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic here...
  // For this example, we'll just log the username and password to the console
  console.log(`Username: ${username}, Password: ${password}`);
}

function loginWithGoogle() {
  // Authenticate with Google using the Google Sign-In API
  gapi.auth2.authorize({
    client_id: CLIENT_ID,
    scope: 'profile email'
  }, function(response) {
    if (response.error) {
      console.error(response.error);
      alert('Error logging in with Google. Please try again.');
      return;
    }

    // Get the user's Google profile information
    const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    const name = profile.getName();
    const email = profile.getEmail();

    // Perform authentication logic here...
    // For this example, we'll just log the name and email to the console
    console.log(`Name: ${name}, Email: ${email}`);
  });
}

// Load the Google Sign-In API
function handleClientLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: CLIENT_ID
    });
  });
}
