/*
#######################################    Functions to handle all actions in profile.html    ##########################################
*/

/**
 * @abstract Dictates which view is seen by clickng on the tabs
 */
(function() {
  $("#timeline-tab").addClass("active");
  $("#timeline-tab").addClass("show");
})();

   /**
    * @abstract will hide dropdown box if user clicks outside of it
    * @param {JS Event} event
    */
  window.onclick = function (event) {
    const list_of_items = document.getElementsByClassName("list_of_items");
    const edit_menu = document.getElementsByClassName("overlayBlock")[0];
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
  /**
   * @abstract When user clicks on tab, this code will be executed
   */
  function openTab(evt, tabName) {
      console.log(tabName);
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tab-pane");
      for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("nav-link");
      for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
      }
      $('#'+tabName).show();
      evt.currentTarget.className += " active";
  }
  /**
   * @abstract exit the edit profile menu
   */
  function cancelExitMenu() {
    document.getElementsByClassName("backgroundOverlay")[0].style.display =
      "none";
    $("#entire_profile").css({ pointerEvents: "visible" });
  }
  /**
   * @abstract Shows edit profile menu ad sets listener to cancel menu
   */
  $("#edit_profile").on("click", function (e) {
    let edit_menu = document.getElementsByClassName("backgroundOverlay");
    edit_menu[0].style.display = "flex";
    $("#entire_profile").css({ pointerEvents: "none" });
    $("#edit_profile_menu").css({ pointerEvents: "visible" });
  });
  $("#exit_edit").on("click", function (e) {
    cancelExitMenu();
  });

  /**
   * @abstract handle textbox as user types
   */
  $(function () {
    //  changes mouse cursor when highlighting lower right of box
    $("#newsfeed").on({
      mousemove: function (e) {
        //stuff to do on mouse enter
        console.log("profile.js");
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
      },
      keyup: function (e) {
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
      }
    }, "textarea");
      //  the following makes the textbox "Auto-Expand" as it is typed in
  });

  /**
   * @abstract when user types, filters out potential users
   */
  $('#profileSearchInput').on('keyup', function(ev){
    filterFunction();
  });
  /**
   * @abstract filters user look up drowdown on top of profile page
   */
  function filterFunction() {
    let input, filter, dropdown, profileLinks;
    input = document.getElementById("profileSearchInput");
    filter = input.value.toUpperCase();
    dropdown = $("#profileSearchDropdown")[0]; // 1st index of Jqeury object is DOM object
    dropdown.style.display = "block";
    profileLinks = dropdown.getElementsByTagName("a"); // gets all <a></a> links in dropdown div
    for (let i = 0; i < profileLinks.length; i++) {
      let txtValue = profileLinks[i].textContent || profileLinks[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        profileLinks[i].style.display = "";
      } else {
        profileLinks[i].style.display = "none"; // hides all users that are filtered out
      }
    }
  }
  // function to cancel the search dropdown (by clicking outside of it in function below)
  function cancelDropDown() {
    const list_of_items = document.getElementsByClassName("list_of_items");
    list_of_items[0].style.display = "none";
  }


  /**
   * @abstract Profile Picture Change
   */
   function changeProfilePic(input,id) {

    file = input.files[0];
    console.log("file");
    if (file.name.includes(".jpg") || file.name.includes(".png") ||
        file.name.includes(".pdf") || file.name.includes(".webp"))
    {
      console.log("is an image");
      let reader = new FileReader();
      reader.onload = function (e) {
        let img_id = String(id).replace("_input", "_img"); // profile_pic_img
        $("#" + img_id).attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  /**
   * @abstract update user profile
   */
  $("form#edit-profile").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    $.ajax({
        url: '/profile',
        type: 'POST',
        data: formData,
        success: function (data) {
            alert("Successfully updated profile")
        },
        cache: false,
        contentType: false,
        processData: false
    });
  });



