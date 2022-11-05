
function loginRocket() {
  $.ajax({
    url: '/login/rocket',
    type: 'GET',
    success: function (data) {
        localStorage.clear();
        const authToken = data.authToken
        localStorage.setItem('rocket_token', authToken);
    },
    cache: false,
    contentType: false,
    processData: false
  });
}
loginRocket()


let iframe = document.getElementById('rocketchatiframe');
iframe.onload = function() {
  let rocket_token = localStorage.getItem("rocket_token");
  iframe.contentWindow.postMessage({
      externalCommand: 'login-with-token',
      token: rocket_token,
  }, '*'); // rocket.chat's URL
}
