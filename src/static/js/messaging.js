
function loginRocket() {
  localStorage.clear();
  $.ajax({
    url: '/rocket/token',
    type: 'GET',
    success: function (data) {
      const authToken = data.authToken
        const iframe = document.getElementById('rocketchatiframe');
        iframe.contentWindow.postMessage({
          externalCommand: 'login-with-token',
          token: authToken,
        }, '*'); // rocket.chat's URL
        localStorage.setItem('rocket_token', authToken);
    },
    cache: false,
    contentType: false,
    processData: false
  });
}
// try to load rocket chat from local storage (loads faster)
const iframe = document.getElementById('rocketchatiframe');
iframe.onload = function() {
  let rocket_token = localStorage.getItem("rocket_token");
  iframe.contentWindow.postMessage({
      externalCommand: 'login-with-token',
      token: rocket_token,
  }, '*'); // rocket.chat's URL
  // just in case local storage doesn't have correct key, load new token from rocket chat
  loginRocket() // todo create way to tell if Rocketchat loaded
}


