/*
#######################################    Functions to handle all actions in profile.html    ##########################################
*/
/*

PROFILE TABS

*/
// Dictates which view is seen by clickng on the tabs
$(document).ready(function(){
    //  When user clicks on tab, this code will be executed
  $('#timeline-tab').addClass("active");
  $('#timeline-tab').addClass("show");
});
/*

EDIT PROFILE MENU 

*/
function cancelExitMenu() {
  document.getElementsByClassName("backgroundOverlay")[0].style.display = "none";
  $("#entire_profile").css({pointerEvents:"visible"});
}
$('#edit_profile').on("click", function(e)  {
  edit_menu = document.getElementsByClassName("backgroundOverlay");
  console.log(edit_menu[0]);
  edit_menu[0].style.display = "flex"; 
  $("#entire_profile").css({pointerEvents:"none"});
  $("#edit_profile_menu").css({pointerEvents:"visible"});

});
$('#exit_edit').on("click", function(e)  {
  cancelExitMenu();
});
/*

REPLY BUTTON

*/
// anytime reply button is clicked, make a ajax call to server
$(document).on("click", ".reply_button", function(e) { /* old regular expression I was using to find all reply ids: a[id|='reply' */ 
  e.preventDefault();
  var id_number = e.currentTarget.name;
  console.log("comment_id " + id_number);
  var value = $("#textbox_reply-"+id_number).val();
  console.log(value);
    
  //alert(value);
  $.ajax({
      type: "POST",
      url: "/comment_"+id_number,
      data: JSON.stringify({ "text" : value } ),
      contentType: "application/json; charset=utf-8",
      dataType: "text",
      error: function(data) {
        response = eval(data);
        comment = JSON.stringify(response);
        console.log("error" + comment)  
      },
      success: function (data) {
          comment = data;
          console.log("ajax return comment ", comment)
          $("#comments-"+id_number).append(comment);  

      }
  });
  
});
/*

POST BUTTON 

*/
$("#post").on("click", function(e) { 
    e.preventDefault();
    var value = $("#textbox_post").val();
    console.log(value);    
    input = document.getElementById('post_file'); // grabs the right file by ID
    files = input.files[0];
    var formData = new FormData();
    formData.append("file",files);
    formData.append("text",value);
    $.ajax({
        type: "POST",
        url: "/post",
        data: formData,
        cache:false,
        contentType: false,
        processData:false,
        dataType: "text",        
        error: function(data) {
          response = eval(data);
          post = JSON.stringify(response);
          console.log("error" + post)
          $("#write_post").append(post);
        },
        success: function (data) {
            post = data;
            console.log("post being created "+post)
            $("#write_post").append(post);
          if(file != null){
            console.log("file");
            if(file.name.includes(".jpg") || file.name.includes(".png") || file.name.includes(".pdf") || file.name.includes(".webp")){
              console.log("is an image");
              var reader = new FileReader();
              reader.onload = function (e) {
                 $('#pic').attr('src', e.target.result);
              }
             reader.readAsDataURL(file);
            }
          }

        }
    });
});
  // handle textbox as user types
$(function() {
    //  changes mouse cursor when highlighting loawer right of box
    $("textarea").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();
        
        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .css('overflow', 'hidden').keyup(function(e) {
        //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
        if (e.which == 8 || e.which == 46) {
            $(this).height(parseFloat($(this).css("min-height")) != 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
        }
        //  the following will help the text expand as typing takes place
        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height()+1);
        };
    });
});

/* 

SEARCH BAR 

*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content of the search bar */
function showSearchBar() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  list_of_items = document.getElementsByClassName("list_of_items");
  list_of_items[0].style.display = "block"
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
  
}
// function to cancel the search dropdown (by clicking outside of it in function below)
function cancelDropDown() {
  list_of_items = document.getElementsByClassName("list_of_items");
  list_of_items[0].style.display = "none"
}

/*

WINDOW CLICKS

*/
window.onclick = function(event) {
    list_of_items = document.getElementsByClassName("list_of_items");
    edit_menu = document.getElementsByClassName("overlayBlock")[0];
    if (!event.target.matches('list_of_items')) { // cancels dropdown box if clicked somewhere outside of dropdown box
        if (list_of_items[0].style.display == "block") {
            cancelDropDown();
        }
    }
    // minimizes the edit profile menu when clicking out of it
    if(!edit_menu.contains(event.target) && !event.target.matches('#edit_profile')) {
        cancelExitMenu();
    }

} 

// when upload icon is clicked, trigger the file browser input (the input is hidden visually but can be "clicked" on)
$(".upload_icon").click(function (e) {
  var id = e.currentTarget.id;  
  $("#"+id+"_input").trigger('click');
}); 
// change the name next to icon on file upload
$('input[type="file"]').on('change', function(e) {
  var val = $(this).val();
  $(this).siblings('span').text(val);
  
  var id = e.currentTarget.id;  
  input = document.getElementById(id); // grabs the right file by ID
  file = input.files[0];
  console.log("file");
  if(file.name.includes(".jpg") || file.name.includes(".png") || file.name.includes(".pdf") || file.name.includes(".webp")){
    console.log("is an image");
    var reader = new FileReader();
    reader.onload = function (e) {
        var img_id = String(id).replace('_input','_img');
       $('#'+img_id).attr('src', e.target.result);
    }
   reader.readAsDataURL(file);
  }
})