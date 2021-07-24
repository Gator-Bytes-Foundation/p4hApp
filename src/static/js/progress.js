// for changing the file name dynamically //
//import "../../css/progress.css";

var inputs = document.querySelectorAll(".inputfile"); // looks if a file is set for upload

Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling, // gets the inner html of the label attribute that is visually seen (the file input is invisible)
    labelVal = label.innerHTML;

  input.addEventListener("change", function (e) { // upon a file input being selected, we want to update the label to show what file was selected
    let id = e.currentTarget.name; 
    let fileName = "";
    if (this.files && this.files.length > 1)
      fileName = (this.getAttribute("data-multiple-caption") || "").replace(
        "{count}",
        this.files.length
      );
    else {
      fileName = e.target.value.split("\\").pop();
    }
    console.log(id);
    if (fileName) {
      input.nextElementSibling.querySelector( 'strong' ).innerHTML = fileName;
    } 
    else {
      label.innerHTML = labelVal;
      $("#label-"+id).empty();
      $("#label-"+id).append(file.name);
    }
  });
});

let debugJSON = function(data,err,exception) {
  let response = JSON.stringify(eval(data));
  console.log(response);
  console.log(exception);
  alert('Apologies! An error occured!');
}

// is triggered when upload is clicked
$(document).on("click", ".upload", function (e) {
  e.preventDefault();
  let milestoneId = e.currentTarget.name;
  let user_id = $('#header-progress').attr('name'); 
  console.log("clicked " + milestoneId);
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert("The File APIs are not fully supported in this browser.");
    return;
  }
  let input = document.getElementById("file-" + milestoneId); // grabs the right file by ID
  if (!input) {
    alert("Um, couldn't find the fileinput element.");
    return; 
  } else if (!input.files) {
    alert(
      "This browser doesn't seem to support the `files` property of file inputs."
    );
    return;
  } else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
    return; 
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
  formData.append('progressFile', file);
  $.ajax({
    type: "POST",
    url: "/profile/" + user_id + "/progress/" + milestoneId,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function (data) {
      console.log("the file submission returned ", data);
      alert('File uploaded successfully!');
      $("#label-" + milestoneId).empty();
    },
    error: debugJSON
  });
});
// file is passed to success function instead of downloading to browser so temp not using this function
/**
 * 
 * @param {click event} event 
 * @abstract Function is currently not being used due to Flask "send_file" function not working with Ajax callback function. May use in future. 
 */
function downloadMilestone(event) {
  let user_id = $('#header-progress').attr('name'); 
  let milestoneId = (event.currentTarget.id).replace('download-',''); // remove unique identifier from html id to extract canvas_assignment id
  console.log('file being downloaded');
  $.ajax({
      url: "progress/" + milestoneId,
      type: 'GET',
      error: function(err) {
        alert("No Document Has Been Uploaded")
      }
  });
  event.preventDefault();
}