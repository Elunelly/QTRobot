// Elements
const storyText = document.getElementById("story-text");
const storyTitle = document.getElementById("story-title");
const qtFace = document.getElementById("qt-face");
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
const playBtn = document.getElementById("play");
const rewindBtn = document.getElementById("rewind");
const forwardBtn = document.getElementById("forward");
const volumeSlider = document.getElementById("volume");

let sentences = [];
let currentSentenceIndex = 0;
let isPlaying = false;
let audio = new Audio();
let synth = window.speechSynthesis;
let useTTS = true; // Default to TTS mode
let speed = 50; // Character typing speed

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

function findStory() {
  // To be connected to file browser or database later
  alert("Feature not implemented: Find a story");
}

function addStory() {
  // To be connected to upload interface later
  alert("Feature not implemented: Add a new story");
}

function playRandomStory() {
  // Temporary: Load a local file
  loadStory("stories/sample.txt");
}

function loadStory(filePath) {
  fetch(filePath)
    .then((res) => res.text())
    .then((text) => {
      const lines = text.split(/\n+/).filter(Boolean);
      sentences = lines;
      currentSentenceIndex = 0;
      const title = filePath.split("/").pop().replace(".txt", "");
      storyTitle.textContent = title;
      playStory();
    });
}

function updateFace(emotion) {
  if (!emotion) emotion = "talking";
  qtFace.src = `QT-faces_${emotion}.gif`;
}

function typeText(text, callback) {
  storyText.innerHTML = "";
  let i = 0;
  const scrollable = storyText.parentElement;
  const interval = setInterval(() => {
    if (text[i] === undefined) {
      clearInterval(interval);
      callback();
      return;
    }
    storyText.innerHTML += text[i];
    scrollable.scrollTop = scrollable.scrollHeight;
    i++;
  }, speed);
}

function playCurrentSentence() {
  if (currentSentenceIndex >= sentences.length) return;
  const raw = sentences[currentSentenceIndex];
  const emotion = (raw.match(/\[(.*?)\]/) || [])[1] || "talking";
  const text = raw.replace(/\[.*?\]/g, "");
  updateFace(emotion);
  typeText(text, () => {
    if (useTTS) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = synth.getVoices().find((v) => /boy/i.test(v.name));
      utterance.volume = volumeSlider.value;
      synth.speak(utterance);
    } else {
      audio.src = `audio/sentence-${currentSentenceIndex}.mp3`;
      audio.volume = volumeSlider.value;
      audio.play();
    }
  });
}

function playStory() {
  isPlaying = true;
  playCurrentSentence();
}

playBtn.addEventListener("click", () => {
  playCurrentSentence();
});

rewindBtn.addEventListener("click", () => {
  if (currentSentenceIndex > 0) currentSentenceIndex--;
  playCurrentSentence();
});

forwardBtn.addEventListener("click", () => {
  if (currentSentenceIndex < sentences.length - 1) currentSentenceIndex++;
  playCurrentSentence();
});
