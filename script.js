const keysListEn = [
  { key: "`", shift: "~", code: "Backquote" },
  { key: "1", shift: "!", code: "Digit1" },
  { key: "2", shift: "@", code: "Digit2" },
  { key: "3", shift: "#", code: "Digit3" },
  { key: "4", shift: "$", code: "Digit4" },
  { key: "5", shift: "%", code: "Digit5" },
  { key: "6", shift: "^", code: "Digit6" },
  { key: "7", shift: "&", code: "Digit7" },
  { key: "8", shift: "*", code: "Digit8" },
  { key: "9", shift: "(", code: "Digit9" },
  { key: "0", shift: ")", code: "Digit0" },
  { key: "-", shift: "_", code: "Minus" },
  { key: "=", shift: "+", code: "Equal" },
  { key: "Backspace", shift: null, code: "Backspace" },
  { key: "Tab", shift: null, code: "Tab" },
  { key: "q", shift: "Q", code: "KeyQ" },
  { key: "w", shift: "W", code: "KeyW" },
  { key: "e", shift: "E", code: "KeyE" },
  { key: "r", shift: "R", code: "KeyR" },
  { key: "t", shift: "T", code: "KeyT" },
  { key: "y", shift: "Y", code: "KeyY" },
  { key: "u", shift: "U", code: "KeyU" },
  { key: "i", shift: "I", code: "KeyI" },
  { key: "o", shift: "O", code: "KeyO" },
  { key: "p", shift: "P", code: "KeyP" },
  { key: "[", shift: "{", code: "BracketLeft" },
  { key: "]", shift: "}", code: "BracketRight" },
  { key: "\\", shift: "|", code: "Backslash" },
  { key: "Del", shift: null, code: "Delete" },
  { key: "CapsLock", shift: null, code: "CapsLock" },
  { key: "a", shift: "A", code: "KeyA" },
  { key: "s", shift: "S", code: "KeyS" },
  { key: "d", shift: "D", code: "KeyD" },
  { key: "f", shift: "F", code: "KeyF" },
  { key: "g", shift: "G", code: "KeyG" },
  { key: "h", shift: "H", code: "KeyH" },
  { key: "j", shift: "J", code: "KeyJ" },
  { key: "k", shift: "K", code: "KeyK" },
  { key: "l", shift: "L", code: "KeyL" },
  { key: ";", shift: ":", code: "Semicolon" },
  { key: "'", shift: '"', code: "Quote" },
  { key: "Enter", shift: null, code: "Enter" },
  { key: "Shift", shift: null, code: "ShiftLeft" },
  { key: "z", shift: "Z", code: "KeyZ" },
  { key: "x", shift: "X", code: "KeyX" },
  { key: "c", shift: "C", code: "KeyC" },
  { key: "v", shift: "V", code: "KeyV" },
  { key: "b", shift: "B", code: "KeyB" },
  { key: "n", shift: "N", code: "KeyN" },
  { key: "m", shift: "M", code: "KeyM" },
  { key: ",", shift: "<", code: "Comma" },
  { key: ".", shift: ">", code: "Period" },
  { key: "/", shift: "?", code: "Slash" },
  { key: "&uArr;", shift: null, code: "ArrowUp" },
  { key: "Shift", shift: null, code: "ShiftRight" },
  { key: "Ctrl", shift: null, code: "ControlLeft" },
  { key: "Win", shift: null, code: "MetaLeft" },
  { key: "Alt", shift: null, code: "AltLeft" },
  { key: " ", shift: null, code: "Space" },
  { key: "Alt", shift: null, code: "AltRight" },
  { key: "&lArr;", shift: null, code: "ArrowLeft" },
  { key: "&dArr;", shift: null, code: "ArrowDown" },
  { key: "&rArr;", shift: null, code: "ArrowRight" },
  { key: "Ctrl", shift: null, code: "ControlRight" },
];

const keysListRu = [
  { key: "ё", shift: "Ё", code: "Backquote" },
  { key: "1", shift: "!", code: "Digit1" },
  { key: "2", shift: '"', code: "Digit2" },
  { key: "3", shift: "№", code: "Digit3" },
  { key: "4", shift: ";", code: "Digit4" },
  { key: "5", shift: "%", code: "Digit5" },
  { key: "6", shift: ":", code: "Digit6" },
  { key: "7", shift: "?", code: "Digit7" },
  { key: "8", shift: "*", code: "Digit8" },
  { key: "9", shift: "(", code: "Digit9" },
  { key: "0", shift: ")", code: "Digit0" },
  { key: "-", shift: "_", code: "Minus" },
  { key: "=", shift: "+", code: "Equal" },
  { key: "Backspace", shift: null, code: "Backspace" },
  { key: "Tab", shift: null, code: "Tab" },
  { key: "й", shift: "Й", code: "KeyQ" },
  { key: "ц", shift: "Ц", code: "KeyW" },
  { key: "у", shift: "У", code: "KeyE" },
  { key: "к", shift: "К", code: "KeyR" },
  { key: "е", shift: "Е", code: "KeyT" },
  { key: "н", shift: "Н", code: "KeyY" },
  { key: "г", shift: "Г", code: "KeyU" },
  { key: "ш", shift: "Ш", code: "KeyI" },
  { key: "щ", shift: "Щ", code: "KeyO" },
  { key: "з", shift: "З", code: "KeyP" },
  { key: "х", shift: "Х", code: "KeyP" },
  { key: "ъ", shift: "Ъ", code: "KeyP" },
  { key: "\\", shift: "/", code: "Backslash" },
  { key: "Del", shift: null, code: "Delete" },
  { key: "CapsLock", shift: null, code: "CapsLock" },
  { key: "ф", shift: "Ф", code: "KeyA" },
  { key: "ы", shift: "Ы", code: "KeyS" },
  { key: "в", shift: "В", code: "KeyD" },
  { key: "а", shift: "А", code: "KeyF" },
  { key: "п", shift: "П", code: "KeyG" },
  { key: "р", shift: "Р", code: "KeyH" },
  { key: "о", shift: "О", code: "KeyJ" },
  { key: "л", shift: "Л", code: "KeyK" },
  { key: "д", shift: "Д", code: "KeyL" },
  { key: "ж", shift: "Ж", code: "Semicolon" },
  { key: "э", shift: "Э", code: "Quote" },
  { key: "Enter", shift: null, code: "Enter" },
  { key: "Shift", shift: null, code: "ShiftLeft" },
  { key: "я", shift: "Я", code: "KeyZ" },
  { key: "ч", shift: "Ч", code: "KeyX" },
  { key: "с", shift: "С", code: "KeyC" },
  { key: "м", shift: "М", code: "KeyV" },
  { key: "и", shift: "И", code: "KeyB" },
  { key: "т", shift: "Т", code: "KeyN" },
  { key: "ь", shift: "Ь", code: "KeyM" },
  { key: "б", shift: "Б", code: "Comma" },
  { key: "ю", shift: "Ю", code: "Period" },
  { key: ".", shift: ",", code: "Slash" },
  { key: "&uArr;", shift: null, code: "ArrowUp" },
  { key: "Shift", shift: null, code: "ShiftRight" },
  { key: "Ctrl", shift: null, code: "ControlLeft" },
  { key: "Win", shift: null, code: "MetaLeft" },
  { key: "Alt", shift: null, code: "AltLeft" },
  { key: " ", shift: null, code: "Space" },
  { key: "Alt", shift: null, code: "AltRight" },
  { key: "&lArr;", shift: null, code: "ArrowLeft" },
  { key: "&dArr;", shift: null, code: "ArrowDown" },
  { key: "&rArr;", shift: null, code: "ArrowRight" },
  { key: "Ctrl", shift: null, code: "ControlRight" },
];

const body = document.body;

const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const container = document.createElement("div");
container.className = "container";

const title = document.createElement("div");
title.className = "title";
title.textContent = "RSS Виртуальная клавиатура";

const screen = document.createElement("textarea");
screen.className = "screen";
const keyboard = document.createElement("div");
keyboard.className = "keyboard";

const postHowCreate = document.createElement("div");
postHowCreate.className = "postscriptum";
const postHowChangeLang = document.createElement("div");
postHowChangeLang.className = "postscriptum";
postHowCreate.textContent = "Клавиатура создана в операционной системе Windows";
postHowChangeLang.textContent =
  "Для переключения языка комбинация: левыe ctrl + alt";

body.append(wrapper);
wrapper.append(container);

container.append(title);
container.append(screen);
container.append(keyboard);
container.append(postHowCreate);
container.append(postHowChangeLang);

let activeKey = undefined;

//............................................. Render keyboard: ............................................
let isItRu = false;
let shiftActiv = false;
let capsLockActiv = false;

function renderKeyboard() {
  for (let i = 0; i < keysListEn.length; i++) {
    const key = document.createElement("div");
    key.className = "key";
    key.classList.add(keysListEn[i].code);

    key.onmousedown = () => {
      activeKey = key;
      key.classList.add("keyDown");
      if (keysListEn[i].shift !== null) {
        screen.value += keysListEn[i].key;
      }
      if ((keysListEn[i].code === "Backspace") & (screen.value !== "")) {
        screen.value = screen.value.slice(0, -1);
      }
      if ((keysListEn[i].code === "Delete") & (screen.value !== "")) {
      }
      if (keysListEn[i].code === "Tab") {
        screen.value += "\t";
      }
      if (keysListEn[i].code === "Space") {
        screen.value += " ";
      }
      if (keysListEn[i].code === "Enter") {
        screen.value += "\n";
      }
    };

    document.onmouseup = () => {
      if (activeKey) {
        activeKey.classList.remove("keyDown");
      }
    };

    key.onmouseover = () => {
      key.classList.add("onKey");
    };
    key.onmouseout = () => {
      key.classList.remove("onKey");
    };

    if (
      keysListEn[i].key === "&uArr;" ||
      keysListEn[i].key === "&lArr;" ||
      keysListEn[i].key === "&dArr;" ||
      keysListEn[i].key === "&rArr;"
    ) {
      key.innerHTML = keysListEn[i].key;
    } else {
      key.textContent = keysListEn[i].key;
    }

    keyboard.append(key);
  }
}

// .................................. Render english keyboard: ............................................

function renderShiftKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListEn[i].shift !== null) {
      keys[i].textContent = keysListEn[i].shift;
      keys[i].onmousedown = () => {
        if (keysListEn[i].shift !== null) {
          screen.value += keysListEn[i].shift;
        }
      };
    }
  }
}

function renderSmallKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListEn[i].shift !== null) {
      keys[i].textContent = keysListEn[i].key;
      keys[i].onmousedown = () => {
        if (keysListEn[i].shift !== null) {
          screen.value += keysListEn[i].key;
        }
      };
    }
  }
}

function renderCapsKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListEn[i].shift !== null) {
      if (keysListEn[i].shift.toLowerCase() === keysListEn[i].key) {
        keys[i].textContent = keysListEn[i].shift;
        keys[i].onmousedown = () => {
          if (keysListEn[i].shift !== null) {
            screen.value += keysListEn[i].shift;
          }
        };
      }
    }
  }
}

//.................................. Render rusian keyboard: ............................................

function renderSmallRuKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListRu[i].shift !== null) {
      keys[i].textContent = keysListRu[i].key;
      keys[i].onmousedown = () => {
        if (keysListRu[i].shift !== null) {
          screen.value += keysListRu[i].key;
        }
      };
    }
  }
}

function renderShiftRuKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListRu[i].shift !== null) {
      keys[i].textContent = keysListRu[i].shift;
      keys[i].onmousedown = () => {
        if (keysListRu[i].shift !== null) {
          screen.value += keysListRu[i].shift;
        }
      };
    }
  }
}

function renderCapsRuKeyboard() {
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    if (keysListRu[i].shift !== null) {
      if (keysListRu[i].shift.toLowerCase() === keysListRu[i].key) {
        keys[i].textContent = keysListRu[i].shift;
        keys[i].onmousedown = () => {
          if (keysListRu[i].shift !== null) {
            screen.value += keysListRu[i].shift;
          }
        };
      }
    }
  }
}

renderKeyboard();

//............................................ On keydown/up: ....................................................

document.onkeydown = (event) => {
  event.preventDefault();
  const eventCode = event.code;
  const key = document.querySelector(`.${eventCode}`);
  if (eventCode !== "CapsLock") {
    key.classList.add("keyDown");
  }
  const caps = document.querySelector(".key.CapsLock");

  let resultEn = keysListEn.find((item) => item.code === eventCode);
  let resultRu = keysListRu.find((item) => item.code === eventCode);

  if (resultEn.shift !== null) {
    if (isItRu) {
      if (capsLockActiv) {
        screen.value += resultRu.shift;
      }
      if (!capsLockActiv & !event.shiftKey) {
        screen.value += resultRu.key;
      }
      if (event.shiftKey) {
        screen.value += resultRu.shift;
      }
    }

    if (!isItRu) {
      if (capsLockActiv) {
        screen.value += resultEn.shift;
      }
      if (!capsLockActiv & !event.shiftKey) {
        screen.value += resultEn.key;
      }
      if (event.shiftKey) {
        screen.value += resultEn.shift;
      }
    }
  }
  if (resultEn.code === "Backspace") {
    screen.value = screen.value.slice(0, -1);
  }
  if (resultEn.code === "Tab") {
    screen.value += "\t";
  }
  if (resultEn.code === "Space") {
    screen.value += " ";
  }
  if (resultEn.code === "Enter") {
    screen.value += "\n";
  }

  //......................................................................................................
  if (event.ctrlKey & event.altKey) {
    isItRu = !isItRu;
    if (isItRu) {
      localStorage.setItem("lang", JSON.stringify("ru"));
      renderSmallRuKeyboard();
    }
    if (!isItRu) {
      localStorage.setItem("lang", JSON.stringify("en"));
      renderSmallKeyboard();
    }
  }

  if (event.shiftKey) {
    shiftActiv = !shiftActiv;
    if (shiftActiv) {
      if (isItRu) {
        renderShiftRuKeyboard();
      }
      if (!isItRu) {
        renderShiftKeyboard();
      }
    }
  }

  if (resultEn.code === "CapsLock") {
    capsLockActiv = !capsLockActiv;
    if (capsLockActiv) {
      caps.classList.add("keyDown");
      if (!isItRu) {
        renderCapsKeyboard();
      }
      if (isItRu) {
        renderCapsRuKeyboard();
      }
    }
    if (!capsLockActiv) {
      caps.classList.remove("keyDown");
      if (!isItRu) {
        renderSmallKeyboard();
      }
      if (isItRu) {
        renderSmallRuKeyboard();
      }
    }
  }
};

document.onkeyup = (event) => {
  const eventCode = event.code;
  const key = document.querySelector(`.${eventCode}`);
  if (eventCode !== "CapsLock") {
    key.classList.remove("keyDown");
  }

  shiftActiv = !shiftActiv;
  if (!shiftActiv) {
    if (!isItRu) {
      renderSmallKeyboard();
    }
    if (isItRu) {
      renderSmallRuKeyboard();
    }
  }
};

//........................................... On mousedown/up: ................................................

//........................................... Shift: ........................................................
const shiftL = document.querySelector(".key.ShiftLeft");
const shiftR = document.querySelector(".key.ShiftRight");

shiftL.onmousedown = () => {
  shiftL.classList.add("keyDown");

  if (!isItRu) {
    renderShiftKeyboard();
  }
  if (isItRu) {
    renderShiftRuKeyboard();
  }
};
shiftL.onmouseup = () => {
  shiftL.classList.remove("keyDown");
  if (!isItRu) {
    renderSmallKeyboard();
  }
  if (isItRu) {
    renderSmallRuKeyboard();
  }
};

shiftR.onmousedown = () => {
  shiftR.classList.add("keyDown");
  if (!isItRu) {
    renderShiftKeyboard();
  }
  if (isItRu) {
    renderShiftRuKeyboard();
  }
};
shiftR.onmouseup = () => {
  shiftR.classList.remove("keyDown");
  if (!isItRu) {
    renderSmallKeyboard();
  }
  if (isItRu) {
    renderSmallRuKeyboard();
  }
};

//............................................... Caps Lock: ................................................

const capsLock = document.querySelector(".key.CapsLock");

capsLock.onmousedown = () => {
  capsLock.classList.toggle("keyDown");
  capsLockActiv = !capsLockActiv;

  if (capsLockActiv) {
    if (!isItRu) {
      renderCapsKeyboard();
    }
    if (isItRu) {
      renderCapsRuKeyboard();
    }
  }

  if (!capsLockActiv) {
    if (!isItRu) {
      renderSmallKeyboard();
    }
    if (isItRu) {
      renderSmallRuKeyboard();
    }
  }
};
