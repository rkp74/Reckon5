setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}

document.getElementById('playVideo').addEventListener('click', function () {
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
    const backendApiUrl = 'YOUR_BACKEND_API_URL';

    // Fetch the video URL from the backend API
    fetch(backendApiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if the API response contains a valid video URL
            if (data.videoUrl) {
                // Open the video URL in a new tab or window
                window.open(data.videoUrl, '_blank');
            } else {
                console.error('Invalid video URL from the backend API.');
            }
        })
        .catch(error => console.error('Error fetching video URL from the backend API:', error));
});
