
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■[ Global Declaration ]■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// █                                                                                           █ //
// +-------------------------------------------------------------------------------------------+ //
//                                -  -- Block-Variables [$] --  -                                //
// +-------------------------------------------------------------------------------------------+ //
const $port = window.location.port;         // (Integer) -> port number the server is listening
const $url = `http://localhost:${$port}/`;  // (String)  -> website url root (for server requests)

// +-------------------------------------------------------------------------------------------+ //
//                                -  -- Block-Functions [$] --  -                                //
// +-------------------------------------------------------------------------------------------+ //

// +-------------------------------------------------------------------------------------------+ //
//                              -  -- Block-EventListener [$] --  -                              //
// +-------------------------------------------------------------------------------------------+ //

// █                                                                                           █ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //


(() => {
  const QTfaces_path = './res/img/';
  const QTfaces_fileStart = '_QT-faces_';
  const QTfaces_ext = '.gif';

  const QTaudio_path = './res/voice/';
  const QTaudio_fileStart = 'audio_';
  const QTaudio_ext = '.mp3';


  const qtFace = document.getElementById('qt-face');
  const playBtn = document.getElementById('play-button');
  const pauseBtn = document.getElementById('pause-button');
  const storyContainer = document.getElementById('story-container');
  const storyAudio = new Audio();


  let paused = false;
  let index = 0;
  let storyLines = [];
  let currentTimeout;
  let processing = false;

  async function loadStory(fileName) {
    const response = await fetch('./res/txt/' + fileName + '.txt');
    const text = await response.text();
    return text.split('\n').map(line => line.trim()).filter(line => line);
  }

  function getQTfaceImg(emotion) {
    return QTfaces_path + QTfaces_fileStart + emotion + QTfaces_ext;
  }

  function changeEmotion(emotion) {
    qtFace.src = getQTfaceImg(emotion);
  }

  function clearStory() {
    storyContainer.innerText = '';
  }

  function getQTAudio(fileName) {
    return QTaudio_path + QTaudio_fileStart + fileName + QTaudio_ext;
  }
  

  async function playStory(fileName) {
    if (processing) return;
    processing = true;

    // Load story only once
    if (storyLines.length === 0) {
      storyLines = await loadStory(fileName);
    }

    function displayNextSentence() {
      if (paused || index >= storyLines.length) {
        processing = false;
        return;
      }

      const text = storyLines[index];
      const parts = text.split(/(\[.*?\])/g).filter(Boolean);

      let partIndex = 0;

      function processParts() {
        if (paused || partIndex >= parts.length) {
          index++;
          currentTimeout = setTimeout(displayNextSentence, 1000);
          return;
        }

        const part = parts[partIndex];
        const emotionMatch = part.match(/\[(.*?)\]/);

        if (emotionMatch) {
          changeEmotion(emotionMatch[1]);
          partIndex++;
          currentTimeout = setTimeout(processParts, 50); // Attend 1.5 sec pour laisser l'émotion
        } else {
          storyContainer.innerText = part;
          partIndex++;
          currentTimeout = setTimeout(processParts, 3000); // Attend 3 sec pour lire le texte
        }
      }

      processParts();
    }

    displayNextSentence();
  }

  playBtn.onclick = async () => {
    if (paused) {
      paused = false;
      storyAudio.play();
    } else if (!processing) {
      paused = false;
      index = 0;
      storyLines = [];
      clearStory();
      storyAudio.src = getQTAudio("Histoire");
      storyAudio.currentTime = 0;
      storyAudio.play();
    }
    await playStory("Histoire");
  };
  

  pauseBtn.onclick = () => {
    paused = true;
    storyAudio.pause();
    clearTimeout(currentTimeout);
  };
  
})();
