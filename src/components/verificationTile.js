const VerificationTile = (container, data, casinoId, playerId) => {
  data.map((btn, index) => {
    const tilecontainer = document.createElement("div");
    const htmlcollection = document.createElement("div");
    const icon = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const link = document.createElement("a");

    htmlcollection.classList.add("content");
    tilecontainer.classList.add("tile-container");
    icon.classList.add("icon", btn.icon);
    link.classList.add("btn");

    title.innerHTML = btn.title;
    description.innerHTML = btn.description;

    link.key = index;
    link.innerHTML = `Add ${btn.title}`;
    link.href = `${btn.baseURL}?casinoId=${casinoId}&pId=${playerId}`;

    htmlcollection.appendChild(title);
    htmlcollection.appendChild(description);
    htmlcollection.appendChild(link);
    tilecontainer.appendChild(icon);
    tilecontainer.appendChild(htmlcollection);
    return container.appendChild(tilecontainer);
  });
};

export default VerificationTile;
