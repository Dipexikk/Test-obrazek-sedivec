let imageCount = 0;

function showImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    
    document.getElementById('image').src = imageUrl;
}