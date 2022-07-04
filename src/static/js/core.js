// This is the main JS file that will get loaded on every page

window.$ = $;

/**
 * @abstract when file is uploaded, checks for image placeholder and adds image preview into placeholder
 * @todo Move this out of global js and into Angular service component
 */
$('input[type="file"]').on("change", function(e) {
    let id = e.currentTarget.id;
    let input = document.getElementById(id); // grabs the right file by ID
    let file = input.files[0];
    if (
        file.name.includes(".jpg") ||
        file.name.includes(".png") ||
        file.name.includes(".pdf") ||
        file.name.includes(".webp")
    ) {
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
    let postText = $("#textbox-" + id).val();
    formData.append("text", postText);
    const input = document.getElementById("input-upload-" + id); // grabs the right file by ID
    if (input != null && input.files.length > 0) {
        let files = input.files[0];
        formData.append("file", files);
    }
    formData.append("userid", userId);
    return formData;
}
/**
 * @abstract Creates user post (in sync with Canvas discussion post)
 * @param e JS event
 */
$("#post").on("click", function(e) {
    e.preventDefault();
    let userId = e.currentTarget.name;
    let post_id = e.currentTarget.id;
    let formData = getPostData(post_id, userId); // 0 is first textbox on page
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
          const new_post_id = post.post_id;
          const profilePic = post.profilePic;
          $("#write_post").append(post.html).css("overflow", "hidden");
          $("#profile-post-" + new_post_id).attr("src", "data:;base64," + profilePic);
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

function loading() {
    $("#loading").show();
}

function errorResponse(err) {
    console.log("error " + err);
}
/**
 * @abstract handle textbox as user types and changes mouse cursor when highlighting lower right of box
 */
$("textarea").mousemove(function (e) {
  var myPos = $(this).offset();
  myPos.bottom = $(this).offset().top + $(this).outerHeight();
  myPos.right = $(this).offset().left + $(this).outerWidth();

  if (
    myPos.bottom > e.pageY &&
    e.pageY > myPos.bottom - 16 &&
    myPos.right > e.pageX &&
    e.pageX > myPos.right - 16
  ) {
    $(this).css({ cursor: "nw-resize" });
  } else {
    $(this).css({ cursor: "" });
  }
}).css("overflow", "hidden")
  .keyup(function (e) {
    //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
    if (e.which == 8 || e.which == 46) {
      $(this).height(
        parseFloat($(this).css("min-height")) != 0
          ? parseFloat($(this).css("min-height"))
          : parseFloat($(this).css("font-size"))
      );
    }
    //  the following will help the text expand as typing takes place
    while (
      $(this).outerHeight() <
      this.scrollHeight +
        parseFloat($(this).css("borderTopWidth")) +
        parseFloat($(this).css("borderBottomWidth"))
    ) {
      $(this).height($(this).height() + 1);
    }
  });
