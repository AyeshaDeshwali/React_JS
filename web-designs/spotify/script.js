// console.log("hello");

// // http://127.0.0.1:5500/code/song/

// async function main() {
//   let a = await fetch(" http://127.0.0.1:5500/code/song/");
//   let response = await a.text();
//   // console.log(response);
//   let div = document.createElement("div");
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a");
//   let song = [];
//   // console.log(as);
//   for (let i = 0; i < as.length; i++) {
//     let elm = as[i];
//     if (elm.href.endsWith(".mp3")) {
//       song.push(elm.href);
//     }
//   }
//   console.log(song);
//   // console.log(response);
// }

// main();

console.log("JavaScript लिखें");
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`/${folder}/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }

  // प्लेलिस्ट में सभी गाने दिखाएं
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li><img class="invert" width="34" src="https://cdn.iconscout.com/icon/free/png-256/free-music-820-433848.png" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                <div>Harry</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="https://www.svgrepo.com/show/83084/play-button.svg" alt="">
                            </div> </li>`;
  }

  // प्रत्येक गाने के लिए एक घटना सुनिश्चित करने के लिए एक घटना श्रवण करें
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  return songs;
}

const playMusic = (track, pause = false) => {
  currentSong.src = `/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "https://www.svgrepo.com/show/83084/play-button.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

// एल्बम्स को प्रदर्शित करें
async function displayAlbums() {
  console.log("एल्बम्स प्रदर्शित हो रहे हैं");
  let a = await fetch(`/songs/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");
  let array = Array.from(anchors);
  for (let index = 0; index < array.length; index++) {
    const e = array[index];
    if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
      let folder = e.href.split("/").slice(-2)[0];
      // फ़ोल्डर का मेटाडेटा प्राप्त करें
      let a = await fetch(`/songs/${folder}/info.json`);
      let response = await a.json();
      cardContainer.innerHTML =
        cardContainer.innerHTML +
        ` <div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`;
    }
  }

  // कार्ड क्लिक करने पर प्लेलिस्ट लोड करें
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      console.log("गाने प्राप्त हो रहे हैं");
      songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
      playMusic(songs[0]);
    });
  });
}

async function main() {
  // सभी गानों की सूची प्राप्त करें
  await getSongs("songs/ncs");
  playMusic(songs[0], true);

  // पृष्ठ पर सभी एल्बम्स प्रदर्शित करें
  await displayAlbums();
}
// प्ले, नेक्स्ट, और पिछले के लिए इवेंट}
