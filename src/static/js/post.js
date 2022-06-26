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
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .css("overflow", "hidden")
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
  /*

  WINDOW CLICKS

  */
  window.onclick = function (event) {
    const list_of_items = document.getElementsByClassName("list_of_items");
    const edit_menu = document.getElementsByClassName("overlayBlock")[0];
    if (!event.target.matches("list_of_items")) {
      // cancels dropdown box if clicked somewhere outside of dropdown box
      if (list_of_items && list_of_items[0] && list_of_items[0].style.display == "block") {
        cancelDropDown();
      }
    }
    // minimizes the edit profile menu when clicking out of it
    if (
      !edit_menu.contains(event.target) &&
      !event.target.matches("#edit_profile")
    ) {
      cancelExitMenu();
    }
  };
