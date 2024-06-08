// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

var photoItems = document.getElementsByClassName("photo-item");
for (var i = 0; i < photoItems.length; i++) {
    photoItems[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName("img")[0].src;
        captionText.innerHTML = this.getElementsByTagName("img")[0].alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
