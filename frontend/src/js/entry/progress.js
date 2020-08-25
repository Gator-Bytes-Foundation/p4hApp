// for changing the file name dynamically //
import "../../css/progress.css";

var inputs = document.querySelectorAll(".inputfile"); // looks if a file is set for upload

Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling, // gets the inner html of the label attribute that is visually seen (the file input is invisible)
    labelVal = label.innerHTML;

  input.addEventListener("change", function (e) { // upon a file input being selected, we want to update the label to show what file was selected
    let milestoneId = e.currentTarget.name; 
    let fileName = "";
    if (this.files && this.files.length > 1)
      fileName = (this.getAttribute("data-multiple-caption") || "").replace(
        "{count}",
        this.files.length
      );
    else {
      fileName = e.target.value.split("\\").pop();
    }
    console.log(milestoneId);
    if (fileName) {
      input.nextElementSibling.querySelector( 'strong' ).innerHTML = fileName;
      //$("#label-"+milestoneId).empty();
      //$("#label-1"+milestoneId).append(fileName);
    } 
    else {
      label.innerHTML = labelVal;
      $("#label-"+milestoneId).empty();
      $("#label-"+milestoneId).append(file.name);
      console.log("labelVal");
    }
  });
});

// is triggered when upload is clicked
$(document).on("click", ".upload", function (e) {
  e.preventDefault();
  let milestoneId = e.currentTarget.name;
  console.log("clicked " + milestoneId);
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert("The File APIs are not fully supported in this browser.");
    return;
  }
  let input = document.getElementById("file-" + milestoneId); // grabs the right file by ID
  if (!input) {
    alert("Um, couldn't find the fileinput element.");
  } else if (!input.files) {
    alert(
      "This browser doesn't seem to support the `files` property of file inputs."
    );
  } else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
  }
  let file = input.files[0];
  console.log(file.name);
  let fileType = file.name.split('.').pop();
  let filename = "milestone." + fileType; 
  //var milestoneId = e.currentTarget.id.replace('file-','');
  //fr = new FileReader();
  //fr.onload = receivedText;
  //fr.readAsText(file);
  //fr.readAsDataURL(file);
  var formData = new FormData();
  formData.append(filename, file);
  $.ajax({
    type: "POST",
    url: "/profile/" + userId + "/progress/" + milestoneId,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function (data) {
      console.log("the file submission returned ", data);
      $("#label-" + milestoneId).empty();
    },
    error: function (data) {
      let error = JSON.stringify(eval(data));
      console.log(error);
    }
  });
});
// when upload icon is clicked, trigger the file browser input (the input is hidden visually but can be "clicked" on) 
/*
$(".progress-upload").click(function (e) {
  let milestoneId = e.currentTarget.name; 
  $("#" + "file-" + milestoneId).trigger("click"); // trigger hidden file input button to bring up file browser
}); // triggers $('input[type="file"]').on("change")
*/

// is triggered when download is clicked 
/*
$(document).on("click", ".download", function (e) {
  e.preventDefault();
  let milestoneId = e.currentTarget.name;
  console.log("clicked " + milestoneId);
  $.ajax({
    type: "GET",
    url: "/profile/" + userId + "/progress/" + milestoneId,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "file",
    success: function (data) {
      console.log("the file submission returned ", data);
    },
    error: function (data) {
      let error = JSON.stringify(eval(data));
      console.log(error);
    }
  });
});*/