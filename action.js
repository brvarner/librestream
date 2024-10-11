const main = document.getElementById("main");

// Building LibreStream
// Todo: We need an about page, a search page, a stream page where you can go for each specific video, and a navbar

const homeTab = () => {
  return `
            <div id="home" class="parent">
                <h1>Home</h1>
            </div>
        `;
};

const searchTab = () => {
  return `
            <div id="search" class="parent">
                Search
            </div>
        `;
};

const aboutTab = () => {
  return `
            <div id="about" class="parent">
                About
            </div>
        `;
};

const videoPage = () => {
  return `
            <div id="video" class="parent">
                Video
            </div>
        `;
};

const nav = (activeTab) => {
  switch (activeTab) {
    case "home":
      main.innerHTML = homeTab();
      break;
    case "search":
      main.innerHTML = searchTab();
      break;
    case "about":
      main.innerHTML = aboutTab();
      break;
    default:
      break;
  }
};

window.addEventListener("load", nav("home"));
