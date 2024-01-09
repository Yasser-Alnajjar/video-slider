const videos = [
  {
    id: 1,
    src: "./video/anti-snore-preset-extended.mp4",
    title: "Zero Gravity Preset",
    description:
      "Relax into this scientifically-proven position to reduce pressure on your muscles and joints.",
  },
  {
    id: 2,
    src: "./video/flat-preset-extended.mp4",
    title: "Anti-Snore Preset",
    description:
      "Reduce snoring and open your airways with one-touch torso elevation.",
  },
  {
    id: 3,
    src: "./video/lounge-preset-extended.mp4",
    title: "Lounge Preset",
    description:
      "Skip the stacked pillows with this perfect position for reading, relaxing and more.",
  },
  {
    id: 4,
    src: "./video/memory-preset-extended.mp4",
    title: "Memory Preset",
    description: "Customize your favorite position and save it to memory.",
  },
  {
    id: 5,
    src: "./video/led-lights-preset-extended.mp4",
    title: "Under-Bed LED Lights",
    description:
      "Find your way safely at night with soft, glowing under-the-bed LED lights.",
  },
  {
    id: 6,
    src: "./video/massage-preset-extended.mp4",
    title: "Massage Settings",
    description:
      "Enjoy dual head and/or foot massage settings with 3 modes and 3 intensities.",
  },
];
let active = videos[0]?.id;
document.addEventListener("DOMContentLoaded", () => {
  renderVideo(videos);
  renderTimeline(videos);
  renderTimelineRemote(videos);
  handleActive();
});

function renderVideo(videos) {
  const videoContent = document.getElementById("video-content");

  videoContent.innerHTML = "";

  videos.forEach((video) => {
    videoContent.innerHTML += `
    <div class="video-card" data-video=${video.id} style="${
      video.id !== active ? "opacity:0" : "opacity:1"
    }">
    <video class="media-video" autoplay="${
      active === video.id
    }" loop="loop" muted="muted" defaultmuted="" playsinline=""
    disableremoteplayback="" oncontextmenu="return false;" preload="auto">
    <source 
      src=${video.src}
      type="video/mp4">
    </video>
    </div>`;
  });
}
function renderTimeline(videos) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  videos.forEach((video) => {
    timeline.innerHTML += `
    <div class="timeline-item">
    <button class="icon ${
      active === video.id ? "active" : ""
    }" onclick="ChangeActiveIcons()" data-active=${video.id}>icon</button>
    <div class="timeline-content">
      <p class="timeline-content-title">${video.title}</p>
      <p class="timeline-content-description ${
        active === video.id ? "show" : ""
      }" data-description=${video.id}>${video.description}</p>
    </div>
  </div>`;
  });
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.style.left = `-${icon.offsetWidth / 2}px`;
  });
}
function renderTimelineRemote(videos) {
  const timelineRemote = document.getElementById("timeline-remote");
  timelineRemote.innerHTML = "";
  videos.forEach((video) => {
    timelineRemote.innerHTML += `
    <div class="timeline-item remote">
    <button class="icon ${active === video.id ? "active" : ""}"  data-active=${
      video.id
    }>icon</button>
  </div>`;
  });
}

function handleActive(e) {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      active = e.target.dataset.active;
      ChangeActiveIcons();
      ChangeActiveVideos();
    });
  });
}
function ChangeActiveIcons() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    if (
      Number(icon.dataset.active) === active ||
      icon.dataset.active === active
    ) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
}
function ChangeActiveVideos() {
  const videoCard = document.querySelectorAll(".video-card");
  const videoElements = document.querySelectorAll(".media-video");
  const timelineDescriptions = document.querySelectorAll(
    ".timeline-content-description"
  );
  if (videoCard) {
    videoCard.forEach((video) => {
      if (
        Number(video.dataset.video) === active ||
        video.dataset.video === active
      ) {
        video.style.opacity = 1;
      } else {
        video.style.opacity = 0;
      }
    });
  } else {
    console.error("can't find videos Element");
  }
  if (videoElements) {
    videoElements.forEach((video) => {
      if (
        Number(video.parentElement.dataset.video) !== active ||
        video.parentElement.dataset.video !== active
      ) {
        video.currentTime = 0;
      }
    });
  } else {
    console.error("can't find videos Element");
  }

  if (timelineDescriptions) {
    timelineDescriptions.forEach((description) => {
      if (
        Number(description.dataset.description) === active ||
        description.dataset.description === active
      ) {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    });
  } else {
    console.error("can't find timeline description Element");
  }
}
