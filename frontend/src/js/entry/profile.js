import "../../css/profile.css";
/*
#######################################    Functions to handle all actions in profile.html    ##########################################
*/
/*

PROFILE TABS

*/
// Dictates which view is seen by clickng on the tabs
$(document).ready(function () {
  //  When user clicks on tab, this code will be executed
  $("#timeline-tab").addClass("active");
  $("#timeline-tab").addClass("show");
});
/*

EDIT PROFILE MENU 

*/
function cancelExitMenu() {
  document.getElementsByClassName("backgroundOverlay")[0].style.display =
    "none";
  $("#entire_profile").css({ pointerEvents: "visible" });
}
$("#edit_profile").on("click", function (e) {
  edit_menu = document.getElementsByClassName("backgroundOverlay");
  console.log(edit_menu[0]);
  edit_menu[0].style.display = "flex";
  $("#entire_profile").css({ pointerEvents: "none" });
  $("#edit_profile_menu").css({ pointerEvents: "visible" });
});
$("#exit_edit").on("click", function (e) {
  cancelExitMenu();
});
/*

REPLY BUTTON

*/
// anytime reply button is clicked, make a ajax call to server
$(document).on("click", ".reply_button", function (e) {
  /* old regular expression I was using to find all reply ids: a[id|='reply' */
  e.preventDefault();
  var id_number = e.currentTarget.name;
  console.log("comment_id " + id_number);
  var value = $("#textbox_reply-" + id_number).val();
  console.log(value);

  //alert(value);
  $.ajax({
    type: "POST",
    url: "/comment_" + id_number,
    data: JSON.stringify({ text: value }),
    contentType: "application/json; charset=utf-8",
    dataType: "text",
    error: function (data) {
      response = eval(data);
      comment = JSON.stringify(response);
      console.log("error" + comment);
    },
    success: function (data) {
      comment = data;
      console.log("ajax return comment ", comment);
      $("#comments-" + id_number).append(comment);
    },
  });
});
/*

POST BUTTON 

*/
$("#post").on("click", function (e) {
  e.preventDefault();
  var value = $("#textbox_post").val();
  console.log(value);
  input = document.getElementById("post_file"); // grabs the right file by ID
  var formData = new FormData();
  if (input != null) {
    files = input.files[0];
    formData.append("file", files);
  }

  formData.append("text", value);
  $.ajax({
    type: "POST",
    url: "/post",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "text",
    error: function (data) {
      response = eval(data);
      post = JSON.stringify(response);
      console.log("error" + post);
      $("#write_post").append(post);
    },
    success: function (data) {
      post = data;
      console.log("post being created " + post);
      $("#write_post").append(post);
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
  });
});
// handle textbox as user types
$(function () {
  //  changes mouse cursor when highlighting loawer right of box
  $("textarea")
    .mousemove(function (e) {
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
});

/* 

SEARCH BAR 

*/
/* filters the search bar of all users */

function filterFunction() {
  let input, filter, dropdown, profileLinks;
  input = document.getElementById("profileSearchInput");
  filter = input.value.toUpperCase();
  dropdown = $("#profileSearchDropdown")[0]; // 1st index of Jqeury object is DOM object
  dropdown.style.display = "block";
  profileLinks = dropdown.getElementsByTagName("a"); // gets all <a></a> links in dropdown div
  for (let i = 0; i < profileLinks.length; i++) {
    txtValue = profileLinks[i].textContent || profileLinks[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      profileLinks[i].style.display = "";
    } else {
      profileLinks[i].style.display = "none"; // hides all users that are filtered out
    }
  }
}
// function to cancel the search dropdown (by clicking outside of it in function below)
function cancelDropDown() {
  list_of_items = document.getElementsByClassName("list_of_items");
  list_of_items[0].style.display = "none";
}

/*

WINDOW CLICKS

*/
window.onclick = function (event) {
  list_of_items = document.getElementsByClassName("list_of_items");
  edit_menu = document.getElementsByClassName("overlayBlock")[0];
  if (!event.target.matches("list_of_items")) {
    // cancels dropdown box if clicked somewhere outside of dropdown box
    if (list_of_items[0].style.display == "block") {
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

// when upload icon is clicked, trigger the file browser input (the input is hidden visually but can be "clicked" on)
$(".upload_icon").click(function (e) {
  var id = e.currentTarget.id;
  $("#" + id + "_input").trigger("click");
});
// change the name next to icon on file upload
$('input[type="file"]').on("change", function (e) {
  var val = $(this).val();
  if (val.length > 8) {
    val = val.substring(0, 8);
    val = " " + val + "...";
  }
  $(this).siblings("span").text(val);

  var id = e.currentTarget.id;
  input = document.getElementById(id); // grabs the right file by ID
  file = input.files[0];
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
      var img_id = String(id).replace("_input", "_img");
      $("#" + img_id).attr("src", e.target.result);
    };
    reader.readAsDataURL(file);
  }
});
