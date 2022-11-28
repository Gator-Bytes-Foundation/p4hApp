var inputs = document.querySelectorAll(".inputfile"); // looks if a file is set for upload

/**
 * @abstract change the name next to icon on file upload
 */
$('input[type="file"]').on("change", function(e) {
  let val = $(this).val();
  if (val.length > 8) {
      val = val.substring(0, 8);
      val = " " + val + "...";
  }
  $(this).siblings("span").text(val);
});

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
    if (fileName) {
      input.nextElementSibling.querySelector('strong').innerHTML = fileName;
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
  $("#loading").hide();
  alert(`Apologies! An error occured: ${exception}`);
}

/**
 * @abstract Uploads a document as an assignment to the user
 */
$(document).on("click", ".upload", function (e) {
  e.preventDefault();
  $("#loading").show();
  let milestoneId = e.currentTarget.name;
  let user_id = $('#header-progress').attr('name');
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert("The File APIs are not fully supported in this browser.");
    return;
  }
  let input = document.getElementById("file-" + milestoneId); // grabs the right file by ID
  if (!input) {
    alert("Couldn't find the fileinput element.");
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
  let fileType = file.name.split('.').pop();
  // todo: check for correct file type
  let filename = "milestone." + fileType;
  var formData = new FormData();
  formData.append('progressFile.pdf', file);
  $.ajax({
    type: "POST",
    url: "/profile/" + user_id + "/progress/" + milestoneId,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function (data) {
      $("#loading").hide();
      alert('File uploaded successfully!');
      $("#label-" + milestoneId).empty();
    },
    error: debugJSON
  });
});
/**
 * @param {JS Click Event} event
 * @abstract Function is currently not being used due to Flask "send_file" function not working with Ajax callback function. May use in future.
 */
function downloadMilestone(event) {
  $("#loading").show();
  let user_id = $('#header-progress').attr('name');
  let milestoneId = (event.currentTarget.id).replace('download-',''); // remove unique identifier from html id to extract canvas_assignment id
  $.ajax({
      url: "progress/" + milestoneId,
      type: 'GET',
      success: function (data) {
        $("#loading").hide();
      },
      error: function(err) {
        $("#loading").hide();
        alert("No Document Has Been Uploaded");
      }
  });
  event.preventDefault();
}
