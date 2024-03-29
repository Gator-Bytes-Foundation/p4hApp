// #######################################    Functions to handle all actions in post.html    ##########################################

/**
 * @abstract collects data in DOM that will be needed for post
 * @param {string} id
 * @returns FormDate object with optional file and userid fields
 */
function getPostData(id) {
  let formData = new FormData();
  let value = $("#textbox-" + id).val();
  formData.append("text", value);
  const input = document.getElementById("upload-" + id); // grabs the right file by ID
  if (input != null) {
    files = input.files[0]; // only supports one file currently
    formData.append("file", files);
  }
  formData.append("userid", '{{profile.canvas_user.id}}');
  return formData;
}
  /**
   * @abstract Removes the user's post
   * @param {JS Event} e
   */
  function deletePost(e) {
    const post_id = e.currentTarget.id;
    $("#loading").show()
    $('button[type=submit], input[type=submit]').prop('disabled',true);
    $.ajax({
      type: "DELETE",
      url: "/post/" + post_id,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("delete return comment ", data);
        $("#post_" + post_id).remove();
        $("#loading").hide();
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
        $("#loading").hide();
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      }
    });
  }
  function appendComment(comment,profilePic,post_id) {
    const commentHtml = $(`<div class="post_comment profile-pic">
      <img alt="placeholder" class="img-fluid rounded-circle avatar-sm" src="data:;base64,${profilePic}"/>
      <div class="word_bubble">
        <p>
          <b>${comment.name}</b>
          <br/>
          ${comment.message}
        </p>
      </div>
    </div>`)
    $("#comments-" + post_id).append(commentHtml);
  }
  /**
   * @abstract Creates comment object on specified post
   * @param {JS Event} e
   */
  function commentPost(e) {
    const post_id = e.currentTarget.name;
    const formData = getPostData(post_id);
    $("#loading").show();
    $('button[type=submit], input[type=submit]').prop('disabled',true);
    $.ajax({
      type: "POST",
      url: "/comment/" + post_id,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "text",
      success: function (res) {
        const { profilePic, comment } = JSON.parse(res).data;
        appendComment(comment,profilePic,post_id);
        $("#loading").hide()
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
        $("#loading").hide()
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      }
    });
  }
  /**
   * @abstract Removes user comment object from user's post
   * @param {JS Event} e
   * @param {string} postId
   */
  function deleteComment(e,postId) {
    let comment_id = e.currentTarget.id;
    let post_id = postId;
    $("#loading").show();
    $('button[type=submit], input[type=submit]').prop('disabled',true);
    $.ajax({
      type: "DELETE",
      url: "/post/" + post_id + '/comment/' + comment_id,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("ajax return comment ", data);
        $("#comment-" + comment_id).remove();
        $("#loading").hide();
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
        $("#loading").hide();
        $('button[type=submit], input[type=submit]').prop('disabled',false);
      }
    });
  }
