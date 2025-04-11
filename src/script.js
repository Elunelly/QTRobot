
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
  const QTfaces_fileStart = 'QT-faces_';
  const QTfaces_ext = '.gif';
  const defaultFace = "talking";

  const qtFace = document.getElementById('qt-face');

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
    setTimeout(() => {
      qtFace.src = getQTfaceImg(defaultFace);
    }, 2000);
  }

  async function playStory(fileName) {
    const storyLines = await loadStory(fileName);
    let index = 0;

    async function displayNextSentence() {
      if (index < storyLines.length) {
        let text = storyLines[index];
        let parts = text.split(/(\[.*?\])/g).filter(Boolean);

        async function processParts(i) {
          if (i < parts.length) {
            let part = parts[i];
            let emotionMatch = part.match(/\[(.*?)\]/);
            if (emotionMatch) {
              changeEmotion(emotionMatch[1]);
              setTimeout(() => processParts(i + 1), 1000);
            } else {
              document.getElementById('story-container').innerText = part;
              setTimeout(() => processParts(i + 1), 2000);
            }
          } else {
            index++;
            setTimeout(displayNextSentence, 1000);
          }
        }
        processParts(0);
      }
    }
    displayNextSentence();
  }

  document.getElementById('play-button').onclick = playStory("Histoire");
})();