const videos = [
  {
    id: 1,
    src: "./video/anti-snore-preset-extended.mp4",
    title: "Zero Gravity Preset",
    description:
      "Relax into this scientifically-proven position to reduce pressure on your muscles and joints.",
    icon: `ZG`,
  },
  {
    id: 2,
    src: "./video/flat-preset-extended.mp4",
    title: "Anti-Snore Preset",
    description:
      "Reduce snoring and open your airways with one-touch torso elevation.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M176 256c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm352-128H304c-8.8 0-16 7.2-16 16v144H64V80c0-8.8-7.2-16-16-16H16C7.2 64 0 71.2 0 80v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h512v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-61.9-50.1-112-112-112z"/></svg>`,
  },
  {
    id: 3,
    src: "./video/lounge-preset-extended.mp4",
    title: "Lounge Preset",
    description:
      "Skip the stacked pillows with this perfect position for reading, relaxing and more.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M542.2 32.1c-54.8 3.1-163.7 14.4-231 55.6-4.6 2.8-7.3 7.9-7.3 13.2v363.9c0 11.6 12.6 18.9 23.3 13.5 69.2-34.8 169.2-44.3 218.7-46.9 16.9-.9 30-14.4 30-30.7V62.8c0-17.7-15.4-31.7-33.8-30.7zM264.7 87.6C197.5 46.5 88.6 35.2 33.8 32.1 15.4 31 0 45 0 62.8V400.6c0 16.2 13.1 29.8 30 30.7 49.5 2.6 149.6 12.1 218.8 47 10.6 5.4 23.2-1.9 23.2-13.5V100.6c0-5.3-2.6-10.1-7.3-13z"/></svg>`,
  },
  {
    id: 4,
    src: "./video/memory-preset-extended.mp4",
    title: "Memory Preset",
    description: "Customize your favorite position and save it to memory.",
    icon: `M`,
  },
  {
    id: 5,
    src: "./video/led-lights-preset-extended.mp4",
    title: "Under-Bed LED Lights",
    description:
      "Find your way safely at night with soft, glowing under-the-bed LED lights.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="11" viewBox="0 0 352 512"><path d="M96.1 454.4c0 6.3 1.9 12.5 5.4 17.7l17.1 25.7a32 32 0 0 0 26.6 14.3h61.7a32 32 0 0 0 26.6-14.3l17.1-25.7a32 32 0 0 0 5.4-17.7l0-38.4H96l.1 38.4zM0 176c0 44.4 16.5 84.9 43.6 115.8 16.5 18.9 42.4 58.2 52.2 91.5 0 .3 .1 .5 .1 .8h160.2c0-.3 .1-.5 .1-.8 9.9-33.2 35.7-72.6 52.2-91.5C335.6 260.9 352 220.4 352 176 352 78.6 272.9-.3 175.5 0 73.4 .3 0 83 0 176zm176-80c-44.1 0-80 35.9-80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.8 50.2-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>`,
  },
  {
    id: 6,
    src: "./video/massage-preset-extended.mp4",
    title: "Massage Settings",
    description:
      "Enjoy dual head and/or foot massage settings with 3 modes and 3 intensities.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>`,
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
    }" onclick="ChangeActiveIcons()" data-active=${video.id}>
    ${video.icon}
    </button>
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
    }>${video.icon}</button>
  </div>`;
  });
}

function handleActive() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      if (e.target.nodeName === "svg") {
        active = e.target.parentElement.dataset.active;
      } else if (e.target.nodeName === "path") {
        active = e.target.parentElement.parentElement.dataset.active;
      } else {
        active = e.target.dataset.active;
      }
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
