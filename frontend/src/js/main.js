/**
 * This is the main JS file that will get loaded on every page
 

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
//import "open-iconic/font/css/open-iconic-bootstrap.css";
import "../css/main.css";
import "../css/navbar.css";

import $ from "jquery";*/

window.$ = $;

// handle posts
$(".nav-item").mouseover(function(e) {
    $(this).addClass("pulse");
});
$(".nav-item").mouseout(function(e) {
    $(this).removeClass("pulse");
});

//* show comments for all posts in p4h teach */ 
$(document).on("click", ".view_more", function(e) {
    e.preventDefault();
    var id = e.currentTarget.id;
    console.log("view more: ", id);
    $("#comments-" + id).show();
});

/*

POST BUTTON 

*/
// change the name next to icon on file upload
$('input[type="file"]').on("change", function(e) {
    let val = $(this).val();
    if (val.length > 8) {
        val = val.substring(0, 8);
        val = " " + val + "...";
    }
    $(this).siblings("span").text(val);

    let id = e.currentTarget.id;
    let input = document.getElementById(id); // grabs the right file by ID
    let file = input.files[0];
    console.log(id);
    if (
        file.name.includes(".jpg") ||
        file.name.includes(".png") ||
        file.name.includes(".pdf") ||
        file.name.includes(".webp")
    ) {
        console.log("is an image" + id);
        var reader = new FileReader();
        reader.onload = function(e) {
            var img_id = String(id).replace("input", "display");
            $("#" + img_id).attr("src", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

function getPostData(id, userId) {
    let formData = new FormData();
    let value = $("#textbox-" + id).val();
    formData.append("text", value);
    const input = document.getElementById("input-upload-" + id); // grabs the right file by ID
    if (input != null && input.files.length > 0) {
        let files = input.files[0];
        formData.append("file", files);
    }
    formData.append("userid", userId);
    return formData;
}

$("#post").on("click", function(e) {
    e.preventDefault();
    let userId = e.currentTarget.name;
    let post_id = e.currentTarget.id;
    //console.log("post id " + id_number);
    let formData = getPostData(post_id, userId); // 0 is first textbox on page 
    console.log(post_id);

    $.ajax({
        type: "POST",
        url: "/post/" + userId,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "text",
        success: function(data) {
            console.log("post being created " + data);
            const post = data.html;
            const new_post_id = data.post_id;

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
                    reader.onload = function(e) {
                        $("#display-upload-" + new_post_id).attr("src", e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        },
        error: function(data, err, exception) {
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
$(document).on("click", ".reply_button", function(e) {
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
        success: function(data) {
            var comment = data;
            console.log("ajax return comment ", comment);
            $("#comments-" + post_id).append(comment);
        },
        error: function(data, err, exception) {
            let response = eval(data);
            var comment = JSON.stringify(response);
            console.log("error " + err);
            console.log("status " + exception);
        }
    });
});