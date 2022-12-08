var usedStorage = document.querySelector("#storageid");
var minStorage = document.querySelector("#minStorage");
var maxStorage = document.querySelector("#maxStorage");
var fileUpload = document.querySelector("#fileUpload");
var storageInUseBar = document.querySelector("#storageInUse");
var rangeLvlBar = document.querySelector(".range-lvl");
let sum = 0;

function validateFileType() {
  var fileName = fileUpload.value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
    return true;
  } else {
    alert("Only jpg/jpeg and png files are allowed");
    return false;
  }
}

function validateFileSize() {
  if (validateFileType()) {
    Filevalidation = () => {
      let fi = fileUpload;

      // Check if any file is selected.
      if (fi.files.length > 0) {
        const fSize = fi.files[0].size;
        const fileUpload = fSize / 1024 / 1024;
        // The size of the file.
        if (+fileUpload + +sum > 10) {
          alert("The Limit is 10Mb's");
        } else {
          sum = +sum + +fileUpload.toFixed(2);
          sum = sum.toFixed(2);
          if (fileUpload > 0.2) {
            rangeLvlBar.style.width = 100 * (sum / 10) + "%";
          }
          let WhatsLeft = +10 - +sum;
          usedStorage.innerHTML = WhatsLeft.toFixed(2) + " MB Left";
          storageInUseBar.innerHTML = sum;
        }
      }
    };
    Filevalidation();
  }
}
