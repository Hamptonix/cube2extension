chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "game.html",
    type: "popup",
    width: 485,
    height: 402
  });
});
