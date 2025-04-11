
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
  //const defaultFace = "talking";

  const qtFace = document.getElementById('qt-face');
  const playBtn = document.getElementById('play-button');
  const pauseBtn = document.getElementById('pause-button');

  let paused = false;
  let index = 0;
  let storyLines = [];
  let currentTimeout;

  async function loadStory(fileName) {
    const response = await fetch('./res/txt/'+fileName+'.txt');
    const text = await response.text();
    return text.split('\n').map(line => line.trim()).filter(line => line);
  }

  function getQTfaceImg(emotion) {
    return QTfaces_path + QTfaces_fileStart + emotion + QTfaces_ext;
  }

  function changeEmotion(emotion) {
    qtFace.src = getQTfaceImg(emotion);
    //setTimeout(() => {
      //qtFace.src = getQTfaceImg(defaultFace);
    //}, 1000);
  }

  async function playStory(fileName) {
    if (storyLines.length === 0) {
      storyLines = await loadStory(fileName);
      index = 0;
    

    async function displayNextSentence() {
      if (paused || index >= storyLines.length) return;

      const text = storyLines[index];
      const parts = text.split(/(\[.*?\])/g).filter(Boolean);

      async function processParts(i) {
        if (paused || i >= parts.length) return;

        const part = parts[i];
        const emotionMatch = part.match(/\[(.*?)\]/);

        if (emotionMatch) {
          changeEmotion(emotionMatch[1]);
          currentTimeout = setTimeout(() => processParts(i + 1), 1000);
        } else {
          document.getElementById('story-container').innerText = part;
          currentTimeout = setTimeout(() => processParts(i + 1), 2000);
        }
      }

      await processParts(0);
      index++;
      currentTimeout = setTimeout(displayNextSentence, 1000);
    }

    displayNextSentence();
  }}

  playBtn.onclick = () => {
    paused = false;
    playStory("Histoire");
  };

  pauseBtn.onclick = () => {
    paused = true;
    clearTimeout(currentTimeout);
  };
})();