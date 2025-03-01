// Image Upload Function
function uploadImage() {
    let input = document.getElementById("imageUpload");
    let gallery = document.getElementById("gallery");

    if (input.files.length > 0) {
        let file = input.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image to upload.");
    }
}
