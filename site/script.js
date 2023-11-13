function downloadImage() {
    var modalImage = document.getElementById('modalImage');
    var link = document.createElement('a');

    link.href = modalImage.src;
    link.download = 'techmanthan-events.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}