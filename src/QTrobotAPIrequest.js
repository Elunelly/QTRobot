
// Initialize WebSocket connection to the QTrobot API
const qtrobot = new QTrobot({
  url: "ws://localhost:9090", // Replace with your WebSocket URL if needed
  reconnect_time: 5000,
  callback: {
    connection: function () {
      console.log("Connected to QTrobot API.");
    },
    close: function () {
      console.log("Disconnected from QTrobot API.");
    },
    error: function (error) {
      console.error("Error with WebSocket:", error);
    }
  }
});

// Function to change the robot's emotion
document.getElementById('emotion-select').addEventListener('change', (event) => {
  const emotion = event.target.value;
  changeEmotion(emotion);
});

// Function to make the robot speak
function makeQTrobotSpeak() {
  const text = document.getElementById('speak-text').value;
  if (text.trim()) {
    qtrobot.talk_text(text); // Assuming the API has a 'speak' method
  }
}

// Function to change the robot's emotion based on the dropdown selection
function changeEmotion(emotion) {
  const qtrobotImage = document.getElementById('qtrobot-img');
  // Change the image based on selected emotion
  // Assuming API provides different image links for different emotions
  switch (emotion) {
    case 'happy':
      qtrobotImage.src = qtrobot.show_emotion("QT/happy");
      break;
    case 'sad':
      qtrobotImage.src = qtrobot.show_emotion("QT/sad");
      break;
    case 'angry':
      qtrobotImage.src = qtrobot.show_emotion("QT/angry");
      break;
    case 'neutral':
      qtrobotImage.src = qtrobot.show_emotion("QT/neutral");
      break;
    default:
      qtrobotImage.src = qtrobot.show_emotion("QT/neutral");
  }
}