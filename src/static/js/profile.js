//import "../../css/profile.css";
/*
#######################################    Functions to handle all actions in profile.html    ##########################################
*/
/*

PROFILE TABS

*/
// Dictates which view is seen by clickng on the tabs
$(function(){
    // DOM Ready - do your stuff 
    $("#timeline-tab").addClass("active");
    $("#timeline-tab").addClass("show");
  
    /* Upload Profile File  */
  // when upload icon is clicked, trigger the file browser input (the input is hidden visually but can be "clicked" on)
    /*$(".upload_icon").on('click', function (e) {
      let id = e.currentTarget.id;
      $("#label-"+id).trigger("click"); 
    });
  
  */
  });
        //  When user clicks on tab, this code will be executed
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
          //$('#'+tabName).css('display', 'block');
          $('#'+tabName).show();
          evt.currentTarget.className += " active";
        }
  
  
  /*
  
  EDIT PROFILE MENU 
  
  */
  function cancelExitMenu() {
    document.getElementsByClassName("backgroundOverlay")[0].style.display =
      "none";
    $("#entire_profile").css({ pointerEvents: "visible" });
  }
  
  $("#edit_profile").on("click", function (e) {
    let edit_menu = document.getElementsByClassName("backgroundOverlay");
    //console.log(edit_menu[0]);
    edit_menu[0].style.display = "flex";
    $("#entire_profile").css({ pointerEvents: "none" });
    $("#edit_profile_menu").css({ pointerEvents: "visible" });
  });
  $("#exit_edit").on("click", function (e) {
    cancelExitMenu();
  });
  
  // handle textbox as user types
  $(function () {
    //  changes mouse cursor when highlighting loawer right of box
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
      //  the following simple make the textbox "Auto-Expand" as it is typed in
  });
  
  /* 
  
  SEARCH BAR 
  
  */
  /* filters the search bar of all users */
  
  $('#profileSearchInput').on('keyup', function(ev){
    filterFunction(); 
  });
  
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
  
  
  /* Profile Picture Change */ 
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
  
  $("form#edit-profile").on('submit', function(e) {
    e.preventDefault();
    console.log("FORM SUBMITTED" + window.location.pathname);
    var formData = new FormData(this);
  
    $.ajax({
        url: window.location.pathname,
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
  /*
  
  WINDOW CLICKS
  
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
  
  
  