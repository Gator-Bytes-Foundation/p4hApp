// This is the main JS file that will get loaded on every page

window.$ = $;

function loading(){
  $("#loading").show();
  $('button[type=submit], button[type=button]').prop('disabled',true);
}
function clearLocal(){
  localStorage.clear();
}
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
            $("#" + img_id).removeClass("d-none");
            $("#" + img_id).attr("src", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

function getPostData(id, userId) {
    let formData = new FormData();
    const postText = $("#textbox-" + id).val();
    formData.append("text", postText);
    const input = document.getElementById("input-upload-" + id); // grabs the right file by ID
    if (input != null && input.files.length > 0) {
        const files = input.files[0];
        formData.append("file", files);
    }
    formData.append("userid", userId);
    return formData;
}
/**
 *
 * @param {string} post_id Canvas Discussion Post Id
 * @param {string} postText
 * @param {Base64} profilePic
 * @param {Base64} postFile
 */
function appendPost(post_id,postText,profilePic,postFile) {
  const now = new Date().toLocaleDateString("en-US")
  const nameOfUser = $('#profile-nav')[0].name;
  let postHtml = $(`<article id="${post_id}" class="post_box">
    <div class="profile-name">
      <div class="profile-pic">
        <div class="thumbnail">
          <img id="profile-post-${post_id}" alt="placeholder" class="img-fluid avatar-sm" src="data:;base64,${profilePic}"/>'
        </div>
      </div>
      <div class="col-10">
        <header class="text-left">
          <figcaption class="comment-user">
            <b>${nameOfUser}</b>
          </figcaption>
          <time class="comment-date" datetime="${now}"><i class="fa fa-clock-o pr-1"></i>${now}</time>
        </header>
      </div>
    </div>
    <div class="post">
      <div class="">
        ${postText}
      </div>
      <img id="display-upload-${post_id}" alt="attachment" class="img-fluid post-pic ${!postFile && 'd-none'}"/>
      <hr/>
      <div id="comments-${post_id}"><label class="comment-label" for="from">Comments</label>
        <div id="reply_div-${post_id}" class="reply_div">
        </div>
      </div>
    </div>
  </article>`)

  $("#write_post").append(postHtml).css("overflow", "hidden");
  $("#profile-post-" + post_id).attr("src", "data:;base64," + profilePic);
}

/**
 * @abstract Creates user post (in sync with Canvas discussion post)
 * @param e JS event
 */
$("#post").on("click", function(e) {
    const profileId = e.currentTarget.name;
    const textboxId = e.currentTarget.id;
    const formData = getPostData(textboxId, profileId);
    loading();
    $.ajax({
        type: "POST",
        url: `/post/${profileId}`,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "text",
        success: function(data) {
          const { new_post_id, profilePic } = JSON.parse(data);
          const postText = $(`#textbox-${textboxId}`).val();
          appendPost(new_post_id,postText,profilePic,post.post_file);

          if (typeof file !== "undefined") {
              if (
                  file.name.includes(".jpg") ||
                  file.name.includes(".png") ||
                  file.name.includes(".pdf") ||
                  file.name.includes(".webp")
              ) {
                  var reader = new FileReader();
                  reader.onload = function(e) {
                      $("#display-upload-" + new_post_id).attr("src", e.target.result);
                  };
                  reader.readAsDataURL(file);
              }
          }
          $("#loading").hide()
          $('button[type=submit], input[type=submit]').prop('disabled',false);
        },
        error: function(xhr, status, error) {
            console.error(error);
            $('button[type=submit], input[type=submit]').prop('disabled',false);
        }
    });
});

function errorResponse(err) {
    console.error("error " + err);
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
}).css("overflow", "hidden").keyup(function (e) {
    //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
    if (e.which == 8 || e.which == 46) {
      $(this).height(
        parseFloat($(this).css("min-height")) != 0
          ? parseFloat($(this).css("min-height"))
          : parseFloat($(this).css("font-size"))
      );
    }
    //  the following will help the text expand as typing takes place
    // totalBorderWidth = parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))
    while ($(this).outerHeight() <= this.scrollHeight) {
      $(this).height($(this).height() + 1);
    }
  });
