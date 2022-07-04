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
    console.log('post being deleted');
    e.preventDefault();
    let post_id = e.currentTarget.id;
    console.log("post_id " + post_id);
    $.ajax({
      type: "DELETE",
      url: "/post/" + post_id,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("ajax return comment ", data);
        $("#post_" + post_id).remove();
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
      }
    });
  }
  /**
   * @abstract Creates comment object on specified post
   * @param {JS Event} e
   */
  function commentPost(e) {
    console.log('comment being generated');
    /* old regular expression I was using to find all reply ids: a[id|='reply' */
    e.preventDefault();
    let reply_id = e.currentTarget.id;
    let post_id = e.currentTarget.name;
    console.log("post_id " + post_id);
    let formData = getPostData(post_id);
    $.ajax({
      type: "POST",
      url: "/comment/" + post_id,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "text",
      success: function (data) {
        var comment = data;
        console.log("ajax return comment ", comment);
        $("#comments-" + post_id).append(comment);
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
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
    $.ajax({
      type: "DELETE",
      url: "/post/" + post_id + '/comment/' + comment_id,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log("ajax return comment ", data);
        $("#comment-" + comment_id).remove();
      },
      error: function (data,err,exception) {
        console.log("error " + err);
        console.log("status " + exception);
      }
    });
  }
