// for changing the file name dynamically //
import "../../css/progress.css";
var inputs = document.querySelectorAll(".inputfile"); // looks if a file is set for upload
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling, // gets the inner html of the label attribute that is visually seen (the file input is invisible)
    labelVal = label.innerHTML;

  input.addEventListener("change", function (
    e // upon a file input being selected, we want to update the label to show what file was selected
  ) {
    console.log("change");
    var fileName = "";
    if (this.files && this.files.length > 1)
      fileName = (this.getAttribute("data-multiple-caption") || "").replace(
        "{count}",
        this.files.length
      );
    else {
      fileName = e.target.value.split("\\").pop();
    }

    if (fileName) {
      //label.querySelector( 'span' ).innerHTML = fileName;
      $("#label-1").empty();
      $("#label-1").append(fileName);
    } else {
      label.innerHTML = labelVal;
      $("#label-1").empty();
      $("#label-1").append(file.name);
      console.log("labelVal");
    }
  });
});

// is triggered when upload is clicked
$(document).on("click", ".upload", function (e) {
  e.preventDefault();
  var id_number = e.currentTarget.id;
  console.log("clicked " + id_number);
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert("The File APIs are not fully supported in this browser.");
    return;
  }
  input = document.getElementById("file-1"); // grabs the right file by ID
  if (!input) {
    alert("Um, couldn't find the fileinput element.");
  } else if (!input.files) {
    alert(
      "This browser doesn't seem to support the `files` property of file inputs."
    );
  } else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
  }
  file = input.files[0];
  console.log(file.name);
  //var id_number = e.currentTarget.id.replace('file-','');
  //fr = new FileReader();
  //fr.onload = receivedText;
  //fr.readAsText(file);
  //fr.readAsDataURL(file);
  var formData = new FormData();
  formData.append("file", file);
  $.ajax({
    type: "POST",
    url: "/submit_" + id_number,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "file",
    error: function (data) {
      response = eval(data);
      error = JSON.stringify(response);
      console.log("error ");
    },
    success: function (data) {
      console.log("the file submission returned ", data);
      $("#label-1").empty();
    },
  });
});
