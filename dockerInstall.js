const { exec } = require("child_process");
const os = require("os");

/**
 * Function to install Docker automatically based on the OS.
 */
function installDocker() {
  const platform = os.platform(); // Detect the OS

  let installCommand;

  if (platform === "linux") {
    installCommand = `
      echo "Installing Docker on Linux..." &&
      sudo apt update &&
      sudo apt install -y docker.io &&
      sudo systemctl enable docker &&
      sudo systemctl start docker &&
      echo "Docker installed successfully!"
    `;
  } else if (platform === "darwin") {
    installCommand = `
      echo "Installing Docker on macOS..." &&
      brew install --cask docker &&
      open -a Docker &&
      echo "Docker installed successfully! Please start the Docker app."
    `;
  } else if (platform === "win32") {
    installCommand = `
      echo "Installing Docker on Windows..." &&
      powershell -Command "& {Invoke-WebRequest -UseBasicParsing -OutFile docker-installer.exe https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe}" &&
      start /wait docker-installer.exe &&
      echo "Docker installed successfully! Please restart your system."
    `;
  } else {
    console.error("❌ Unsupported OS. Please install Docker manually.");
    return;
  }

  console.log("⏳ Installing Docker...");
  exec(installCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Installation error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`⚠️ Warning: ${stderr}`);
    }
    console.log(`✅ Installation Output: ${stdout}`);
  });
}

// Run the installation
installDocker();