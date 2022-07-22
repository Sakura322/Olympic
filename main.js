import "./styles/index.scss";

const createNavTiles = () => {
  for (let i = 0; i < 5; i++) {
    const tileElm = document.createElement("div");
    tileElm.classList.add("nav-tile-wrapper");
    tileElm.dataset.tileId = `tile-${i}`;
    tileElm.innerHTML = `<div class="nav-tile nav-tile--front">
        <img
          src="./assets/icons/Icon_Services.svg"
          alt=""
          class="nav-tile--front__icon"
        />
        <h2 class="nav-tile--front__title">My Service</h2>
      </div>
      <div class="nav-tile nav-tile--back">
        <h2 class="nav-tile--back__title">My service</h2>
        <ul class="nav-tile--back__lists">
          <li><a href="#" class="">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </div>`;

    const tileContainer = document.getElementById("navTileContainer");

    tileContainer.appendChild(tileElm);
  }
};
createNavTiles();
