
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
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■[ controls ]■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// █                                                                                           █ //
// +-------------------------------------------------------------------------------------------+ //
//                               -  -- Block-Variables [ct_] --  -                               //
// +-------------------------------------------------------------------------------------------+ //
  const QTfaces_path = './res/img/';
  const QTfaces_fileStart = 'QT-faces_';
  const QTfaces_ext = '.gif';
  const QTfaces_lib = [
    "afraid",
    "angry",
    "blowing_raspberry",
    "breathing_exercise",
    "brushing_teeth_foam",
    "brushing_teeth",
    "calming_down_exercise_nose",
    "calming_down",
    "confused",
    "cry",
    "dirty_face_sad",
    "dirty_face_wash",
    "dirty_face",
    "disgusted",
    "happy_blinking",
    "happy",
    "kiss",
    "neutral_state_blinking",
    "neutral",
    "puffing_the_chredo_eeks",
    "sad",
    "scream",
    "showing_smile",
    "shy",
    "talking",
    "with_a_cold_cleaning_nose",
    "with_a_cold_sneezing",
    "with_a_cold",
    "yawn",
  ];
  const ddSelect = document.getElementById('emotion-select');
  const qtFace = document.getElementById('qt-face');

// +-------------------------------------------------------------------------------------------+ //
//                               -  -- Block-Functions [ct_] --  -                               //
// +-------------------------------------------------------------------------------------------+ //
  function getQTfaceImg(emotion){
    return QTfaces_path+QTfaces_fileStart+ emotion + QTfaces_ext;
  }

  function changeEmotion(emotion) {
    qtFace.src = getQTfaceImg(emotion);
  }

  function initDropdown() {
    ddSelect.innerHTML = '';
    QTfaces_lib.forEach((emotionName) => {
      const item = document.createElement('option');
      item.textContent = emotionName;
      item.setAttribute('value', emotionName);
      if (getQTfaceImg(emotionName)==qtFace.src) {
        item.setAttribute('selected');
      }
      ddSelect.appendChild(item);
    });
  }

// +-------------------------------------------------------------------------------------------+ //
//                             -  -- Block-EventListener [ct_] --  -                             //
// +-------------------------------------------------------------------------------------------+ //
  initDropdown();
  ddSelect.addEventListener('change', (event) => {
    const emotion = event.target.value;
    changeEmotion(emotion);
  });
// █                                                                                           █ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
})();


(() => {
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■[ section_name ]■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// █                                                                                           █ //
// +-------------------------------------------------------------------------------------------+ //
//                               -  -- Block-Variables [sn_] --  -                               //
// +-------------------------------------------------------------------------------------------+ //

// +-------------------------------------------------------------------------------------------+ //
//                               -  -- Block-Functions [sn_] --  -                               //
// +-------------------------------------------------------------------------------------------+ //

// +-------------------------------------------------------------------------------------------+ //
//                             -  -- Block-EventListener [sn_] --  -                             //
// +-------------------------------------------------------------------------------------------+ //

// █                                                                                           █ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
})();