document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoContainer = document.getElementById("videoContainer");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
  
    const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];
    let currentIndex = 0;
  
    function playVideo(index) {
      videoPlayer.src = videos[index];
      videoPlayer.play();
    }
  
    playVideo(currentIndex);
  
    function goToPreviousVideo() {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
      playVideo(currentIndex);
    }
  
    function goToNextVideo() {
      currentIndex = (currentIndex + 1) % videos.length;
      playVideo(currentIndex);
    }
  
    leftArrow.addEventListener("click", goToPreviousVideo);
    rightArrow.addEventListener("click", goToNextVideo);
  
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Adjust this value for sensitivity
  
    videoContainer.addEventListener("touchstart", function(event) {
      touchStartX = event.touches[0].clientX;
    });
  
    videoContainer.addEventListener("touchend", function(event) {
      touchEndX = event.changedTouches[0].clientX;
      let swipeLength = touchStartX - touchEndX;
  
      if (swipeLength > swipeThreshold) {
        goToNextVideo();
      } else if (swipeLength < -swipeThreshold) {
        goToPreviousVideo();
      }
    });
  });
  