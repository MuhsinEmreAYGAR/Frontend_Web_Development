// Creates bootstrap toast
const createToast = function (toastMessage, textColor, toastBackgroundColor) {

    let toast = document.createElement("div");

    toast.innerHTML = `
    <div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container">
    
    <div id="liveToast" class="toast ${toastBackgroundColor}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Sistem Uyarısı</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div> 
      <div class="toast-body ${textColor}">${toastMessage}</div>
    </div>
  </div> `;

    document.getElementsByTagName("body")[0].appendChild(toast)
}

// Function to show toast alert to user
const showToast = function (toastMessage = "", textColor = "", toastBackgroundColor = "") {

    let toast = document.getElementById("toast-container")

    if (toast) {
        toast.remove()
    }

    createToast(toastMessage, textColor, toastBackgroundColor)

    const toastLive = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)

    toastBootstrap.show()
}


export { showToast }
