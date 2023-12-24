function isBraveUA () {
    if (!window.Promise) {
      return false;
    }
    if (typeof navigator.brave == "undefined" ||
        typeof navigator.brave.isBrave != "function")
    {
      return new Promise(function (resolve) {
        resolve(false);
      });
    }
    return navigator.brave.isBrave()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return false;
      });
  }
setTimeout(function() {
    window.location.href = "https://www.google.com";
}, 5000);
  
