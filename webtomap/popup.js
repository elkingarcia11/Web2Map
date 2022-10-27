// Initialize button with user's preferred color
let startMapping = document.getElementById("startMapping");

// When the button is clicked, inject setPageBackgroundColor into current page
startMapping.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: returnCurrentString,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function returnCurrentString() {
    chrome.storage.sync.get("textOfHtml", ({ textOfHtml }) => {
      //document.body.style.backgroundColor = color;
      console.log("String retrieved: %s", textOfHtml)
    });
  }

  document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
}, false);

$(document).click(function(event) {
    var text = $(event.target).text();
});