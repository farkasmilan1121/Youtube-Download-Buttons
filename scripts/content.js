WaitUntilLoaded();

async function WaitUntilLoaded() {
    while (!document.querySelector("#subscribe-button > ytd-subscribe-button-renderer")) {
        await new Promise(r => setTimeout(r, 500));
    }

    CreateButtons();
}

function CreateButtons() {
    toprow = document.getElementsByClassName("style-scope ytd-video-secondary-info-renderer")[1]
    container = document.createElement("div");
    container.classList.add("buttonscontainer")

    let width = toprow.childNodes[1].childNodes[0].offsetWidth + "px";
    let height = toprow.childNodes[1].childNodes[0].offsetHeight + "px";

    MP3BUTTON = CreateDownloadButton("MP3");
    MP3BUTTON.onclick = function () {
        window.open(`https://www.yt-download.org/api/button/mp3?url=${window.location.toString()}`)
    }

    MP4BUTTON = CreateDownloadButton("MP4");
    MP4BUTTON.onclick = function () {
        window.open(`https://www.yt-download.org/api/button/mp4?url=${window.location.toString()}`)
    }

    toprow.appendChild(container);

    function CreateDownloadButton(type) {
        let button = document.createElement('button');
        button.innerText = "Download " + type;
        button.style.width = width;
        button.style.height = height;
        button.classList.add("downloadbutton");
        container.appendChild(button)
        return button;
    }
}