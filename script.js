// Replace these five placeholder values with your hosted wedding greeting video URLs.
// Tip: keep each URL inside quotation marks and separate each line with a comma.
const videos = [
  "VIDEO_URL_1",
  "VIDEO_URL_2",
  "VIDEO_URL_3",
  "VIDEO_URL_4",
  "VIDEO_URL_5"
];

const videoElement = document.getElementById("surpriseVideo");
const loadingElement = document.getElementById("videoLoading");

function chooseRandomVideo(videoList) {
  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
}

function hideLoadingAnimation() {
  loadingElement.classList.add("is-hidden");
}

function loadSurpriseVideo() {
  const selectedVideo = chooseRandomVideo(videos);

  videoElement.src = selectedVideo;
  videoElement.muted = true;
  videoElement.playsInline = true;

  videoElement.addEventListener("loadeddata", hideLoadingAnimation, { once: true });
  videoElement.addEventListener("canplay", hideLoadingAnimation, { once: true });
  videoElement.addEventListener("error", hideLoadingAnimation, { once: true });

  const playPromise = videoElement.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Some browsers block autoplay. Controls remain visible so guests can tap play.
      videoElement.muted = true;
    });
  }
}

loadSurpriseVideo();
