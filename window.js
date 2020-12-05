//create js element node thing with an html string

function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

//creates a new calculator window
var addCalculator = () => {
  container = document.getElementById("main-container");
  calculator = create(
    `<div class="part-container calculator" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Calculator</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Calculator/index.html"></iframe></div>`
  );
  container.appendChild(calculator);
};
//creates a new typeer window
var typeer = () => {
  container = document.getElementById("main-container");
  typegame = create(
    `<div class="part-container typeer" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Typeer</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/typing-game/index.html"></iframe></div>`
  );
  container.appendChild(typegame);
};

//creates a new relax window
var relax = () => {
  container = document.getElementById("main-container");
  relax_please = create(
    `<div class="part-container relax" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Relaxer</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/relaxer-app/index.html"></iframe></div>`
  );
  container.appendChild(relax_please);
};

//creates a new snake windows
var addSnake = () => {
  container = document.getElementById("main-container");
  snake = create(
    `<div class="part-container snake" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Snake</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Snake/index.html"></iframe></div>`
  );
  container.appendChild(snake);
};

var Speech = () => {
  container = document.getElementById("main-container");
  speech = create(
    `<div class="part-container speech" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Speech Reader</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/speech-text-reader/index.html"></iframe></div>`
  );
  container.appendChild(speech);
};

var GKQuiz = () => {
  container = document.getElementById("main-container");
  gk = create(
    `<div class="part-container gk_quiz" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>GK Quiz</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/sortable-list/index.html"></iframe></div>`
  );
  container.appendChild(gk);
};

var expense = () => {
  container = document.getElementById("main-container");
  exp_track = create(
    `<div class="part-container exp_tracker" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Expense Tracker</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/expense-tracker/index.html"></iframe></div>`
  );
  container.appendChild(exp_track);
};

var spotify = () => {
  container = document.getElementById("main-container");
  spotify_song = create(
    `<div class="part-container spotify" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Spotify</p></div><button onclick="closeWindow(this)">×</button><iframe src="https://open.spotify.com/embed-podcast/show/7syoMx9HiA8ReLzRcB7hI0" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`
  );
  container.appendChild(spotify_song);
};

var addDictionary = () => {
  container = document.getElementById("main-container");
  dictionary = create(
    `<div class="part-container dictionary" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Dictionary</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Dictionary/index.html"></iframe></div>`
  );
  container.appendChild(dictionary);
};

var addNote = () => {
  container = document.getElementById("main-container");
  note = create(
    `<div class="part-container note" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Notes</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Notes/index.html"></iframe></div>`
  );
  container.appendChild(note);
};

var addTimer = () => {
  container = document.getElementById("main-container");
  timer = create(
    `<div class="part-container timer" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Timer/Clock</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/ClockTimer/index.html"></iframe></div>`
  );
  container.appendChild(timer);
};

//deletes window
var closeWindow = (element) => {
  element.parentNode.remove();
};

//makes window go to top when clicked
var goTop = (element) => {
  //gets all of the elements
  let elements = document.getElementsByClassName("part-container");
  let zI = 0;
  //loop throught and find the highest z_index, and subtract one from other z_indexes
  //so the number will not increase
  for (let i = 0; i < elements.length; i++) {
    let index = parseInt(elements[i].style.zIndex);
    if (!index) {
      index = 0;
    }
    if (index > parseInt(element.style.zIndex) && element != elements[i]) {
      elements[i].style.zIndex = parseInt(elements[i].style.zIndex) - 1;
    }
    if (index > zI) {
      zI = index;
    }
  }
  //set the z_index of the element to be the hightest
  element.style.zIndex = zI;
  zI = 0;
};

// returns the highest z-index so that all of the windows have differnt z-indexes
// used when new windows are added and makes it so that the windows all have different z_indexes
var returnTop = () => {
  let elements = document.getElementsByClassName("part-container");
  let zIndex = 0;
  for (let i = 0; i < elements.length; i++) {
    let index = parseInt(elements[i].style.zIndex);
    if (!index || index < 1) {
      index = 0;
      elements[i].style.zIndex = 0;
    }
    if (index > zIndex) {
      zIndex = index;
    }
  }

  return zIndex + 1;
};

//saving notes in localStorage so they don't disappear when reloaded
function saveWindow(posX, posY, zI, width, height, type) {
  this.posX = posX;
  this.posY = posY;
  this.zI = zI;
  this.width = width;
  this.height = height;
  this.type = type;
}

//makes json file and saves the windows in localStorages
function saveWindows() {
  let savedata = [];
  let savedWindows = document.getElementsByClassName("part-container");
  for (let i = 0; i < savedWindows.length; i++) {
    let win = savedWindows[i];
    savedata[i] = new saveWindow(
      win.style.left,
      win.style.top,
      win.style.zIndex,
      win.style.width,
      win.style.height,
      win.classList[1]
    );
  }
  localStorage.setItem("savedWindows", JSON.stringify(savedata));
}

//saves dark/light mode in localStorage
function saveTheme() {
  switch (appearance) {
    case "auto":
      localStorage.setItem("theme", "auto");
      break;
    default:
    case "dark":
      localStorage.setItem("theme", "dark");
      break;
    case "light":
      localStorage.setItem("theme", "light");
      break;
  }
}
//runs the saveWindows and saveTheme functions when page is reloaded
window.addEventListener("beforeUnload", () => {
  saveWindows();
  saveTheme();
});
window.addEventListener("unload", () => {
  saveWindows();
  saveTheme();
});

//loads in the saved windows
function loadWindows() {
  let savedata = JSON.parse(localStorage.getItem("savedWindows"));
  container = document.getElementById("main-container");
  for (let i = 0; i < savedata.length; i++) {
    switch (savedata[i].type) {
      case "calculator":
        calculator = create(
          `<div class="part-container calculator" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Calculator</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Calculator/index.html"></iframe></div>`
        );
        container.appendChild(calculator);
        break;
      case "dictionary":
        dictionary = create(
          `<div class="part-container dictionary" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Dictionary</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Dictionary/index.html"></iframe></div>`
        );
        container.appendChild(dictionary);
        break;
      case "snake":
        snake = create(
          `<div class="part-container snake" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Snake</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Snake/index.html"></iframe></div>`
        );
        container.appendChild(snake);
        break;
      case "note":
        note = create(
          `<div class="part-container note" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Notes</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Notes/index.html"></iframe></div>`
        );
        container.appendChild(note);
        break;
      case "timer":
        timer = create(
          `<div class="part-container timer" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Timer/Clock</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/ClockTimer/index.html"></iframe></div>`
        );
        container.appendChild(timer);
        break;
      case "spotify":
        spotify_song = create(
          `<div class="part-container spotify" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Spotify</p></div><button onclick="closeWindow(this)">×</button><iframe src="https://open.spotify.com/embed-podcast/show/7syoMx9HiA8ReLzRcB7hI0" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`
        );
        container.appendChild(spotify_song);
      case "typeer":
        spotify_song = create(
          `<div class="part-container typeer" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Typeer</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/typing-game/index.html"></iframe></div>`
        );
        container.appendChild(spotify_song);
      case "relax":
        spotify_song = create(
          `<div class="part-container relax" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Relax</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/relaxer-app/index.html"></iframe></div>`
        );
        container.appendChild(spotify_song);

      case "speech":
        speech_reader = create(
          `<div class="part-container speech" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Speech Reader</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/speech-text-reader/index.html"></iframe></div>`
        );
        container.appendChild(speech_reader);
      case "exp_tracker":
        track = create(
          `<div class="part-container exp_tracker" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>Expense Tracker</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/expense-tracker/index.html"></iframe></div>`
        );
        container.appendChild(track);
      case "gk_quiz":
        quiz = create(
          `<div class="part-container gk_quiz" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>GK Quiz</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/sortable-list/index.html"></iframe></div>`
        );
        container.appendChild(quiz);
    }
  }
}

//loads the theme
function loadTheme() {
  let savedAppearance = localStorage.getItem("theme");
  switch (savedAppearance) {
    case "auto":
      auto();
      break;
    case "light":
      lightmode();
      break;
    case "dark":
      darkmode();
  }
}

//loads windows when the website loads
window.addEventListener("load", () => {
  loadWindows();
  loadTheme();
});

function clearAllWindows() {
  document.getElementById("main-container").innerHTML = "";
}
