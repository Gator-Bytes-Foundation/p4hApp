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
            const post = JSON.parse(data); 
            //console.log("post being created " + data);
            const new_post_id = post.post_id;

            $("#write_post").append(post.html).css("overflow", "hidden");
            let profile_pic_src = $('#profile_pic_img').attr('src');
            $("#profile-post-" + new_post_id).attr("src", profile_pic_src);
            if (typeof file !== "undefined") {
                console.log("file");
                if (
                    file.name.includes(".jpg") ||
                    file.name.includes(".png") ||
                    file.name.includes(".pdf") ||
                    file.name.includes(".webp")
                ) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        console.log(e.target);
                        $("#display-upload-" + new_post_id).attr("src", e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        },
        error: function(xhr, status, error) {
            let err = "error " + xhr.responseText;
            //console.log('error due to: ' + error);
            console.log(error);
        }
    });
});
//
function loading(){
    $("#loading").show();
}

function errorResponse(err) {
    console.log("error " + err);
}