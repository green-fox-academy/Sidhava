let addPlaylist = document.querySelector("span");
let table = document.querySelectorAll("table");
let tbody = document.querySelectorAll("tbody");
let tracks = document.querySelector(".tracks");
let audio = document.querySelector("audio");
let currentsong = document.querySelector(".current-song");
let h3 = document.querySelector(".current-title");
let p = document.querySelector(".current-artist");

fetch("/playlists")
  .then(answer => answer.json())
  .then(result => getPlaylists(result));

fetch("/playlist-tracks")
  .then(answer => answer.json())
  .then(result => getTracks(result));

function getPlaylists(result) {
  result.forEach(element => {
    let newRow = document.createElement("tr");
    let rowData = document.createElement("td");
    rowData.innerHTML = element.playlist;
    rowData.className = element.playlist;
    tbody[0].appendChild(newRow);
    newRow.appendChild(rowData);
    if (rowData.innerHTML !== "Favorites") {
      let img = document.createElement("img");
      img.setAttribute("src", "trash-solid.svg");
      img.setAttribute("width", "20px");
      img.setAttribute("height", "20px");
      img.className = "trash";
      rowData.appendChild(img);
    }
  });
  result.forEach(element => {
    document.querySelector("table").addEventListener("click", e => {
      let playlist = e.target.parentElement.className;
      if (playlist === element.playlist) {
      let toBeDeleted = e.target.parentElement.parentElement;
      let parentOfToBeDeleted = toBeDeleted.parentElement;
      deletePlaylist(playlist);
      parentOfToBeDeleted.removeChild(toBeDeleted);
      }
    });
  
    function deletePlaylist(id) {
      fetch(`playlists/${id}`, {
        method: "DELETE"
      });
    }
  });
}

function getTracks(result) {
  result.forEach(element => {
    let newRow = document.createElement("tr");
    table[1].appendChild(newRow);
    let rowData = document.createElement("td");
    let rowData2 = document.createElement("td");
    let rowData3 = document.createElement("td");
    rowData.innerHTML = element.id;
    rowData2.innerHTML = element.title;
    rowData3.innerHTML = element.duration;
    newRow.appendChild(rowData);
    newRow.appendChild(rowData2);
    newRow.appendChild(rowData3);
    tracks.addEventListener("click", () => {
      if (event.target.innerHTML === element.title) {
        audio.setAttribute("src", element.path);
        audio.play();
        h3.innerHTML = element.title;
        p.innerHTML = element.artist;
      }
    });
  });
}

addPlaylist.addEventListener("click", () => {
  if (document.querySelector("input")) {
    return;
  } else {
    let newRow = document.createElement("tr");
    let rowData = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("name", "newPlaylist");
    tbody[0].appendChild(newRow);
    newRow.appendChild(rowData);
    rowData.appendChild(input);
    input.focus();
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        let inputvalue = input.value;
        rowData.removeChild(input);
        rowData.innerHTML = inputvalue;
        let img = document.createElement("img");
        img.setAttribute("src", "trash-solid.svg");
        img.setAttribute("width", "20px");
        img.setAttribute("height", "20px");
        img.className = "trash";
        rowData.appendChild(img);
        fetch("/playlists", {
          headers: {
            "Content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ input: inputvalue })
        })
          .then(data => console.log("request success: ", data))
          .catch(err => "request failure: ", err);
      }
    });
  }
});
