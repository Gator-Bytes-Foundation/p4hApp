/**
 * This is the main JS file that will get loaded on every page
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
//import "open-iconic/font/css/open-iconic-bootstrap.css";
import "../css/main.css";
import "../css/navbar.css";

import $ from "jquery";

window.$ = $;

// handle posts
$(".nav-item").mouseover(function (e) {
  $(this).addClass("pulse");
});
$(".nav-item").mouseout(function (e) {
  $(this).removeClass("pulse");
});

//* show comments for all posts in p4h teach */ 
$(document).on("click", ".view_more", function(e) { 
  e.preventDefault();
  var id = e.currentTarget.id;
  console.log("view more: ", id);
  $("#comments-"+id).show(); 
});


/*

POST BUTTON 

*/
function getPostData(id) {
  let formData = new FormData();
  let value = $("#textbox-" + id).val();
  formData.append("text", value);
  console.log('{{profile.canvas_user.id}}');
  const input = document.getElementById("upload-" + id); // grabs the right file by ID
  if (input != null && input.files.length > 0) {
    let files = input.files[0];
    formData.append("file", files);
  }
  formData.append("userid", '{{profile.canvas_user.id}}'); 
  return formData; 
}

$("#post").on("click", function (e) {
  e.preventDefault();
  var profile_id = e.currentTarget.name;
  //console.log("post id " + id_number);
  let formData = getPostData(0); // 0 is first textbox on page 
  $.ajax({
    type: "POST",
    url: "/post/"+profile_id,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "text",
    success: function (data) {
      const post = data;
      console.log("post being created " + post);
      $("#write_post").append(post).css("overflow", "hidden");
      if (typeof file !== "undefined") {
        console.log("file");
        if (
          file.name.includes(".jpg") ||
          file.name.includes(".png") ||
          file.name.includes(".pdf") ||
          file.name.includes(".webp")
        ) {
          console.log("is an image");
          var reader = new FileReader();
          reader.onload = function (e) {
            $("#pic").attr("src", e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    },
    error: function (data,err,exception) {
      const response = eval(data);
      const post = JSON.stringify(response);
      console.log(data);
      console.log(exception);
    }
  });
});
/*

REPLY BUTTON 

*/
// anytime reply button is clicked, make a ajax call to server
$(document).on("click", ".reply_button", function (e) {
  /* old regular expression I was using to find all reply ids: a[id|='reply' */
  e.preventDefault();
  let reply_id = e.currentTarget.id;
  let post_id = e.currentTarget.name;
  //console.log("post_id " + post_id);
  let formData = getPostData(post_id);
  console.log('commenting');
  //alert(value);
  $.ajax({
    type: "POST",
    url: "/comment/" + post_id,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    //contentType: "application/json; charset=utf-8",
    dataType: "text",
    success: function (data) {
      var comment = data;
      console.log("ajax return comment ", comment);
      $("#comments-" + post_id).append(comment);
    },
    error: function (data,err,exception) {
      let response = eval(data);
      var comment = JSON.stringify(response);
      console.log("error " + err);
      console.log("status " + exception);
    }
  });
});