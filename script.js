    fetch("https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1#TZHBTsMwDIbP5SlMhdRWjIQhDmjLKiHgwoFOggvHLEnXVG1aEldQTXt3mnQTnGI7v7/Yf9jlc/H08bl9gQrbJr9g8xGxSnE5nRFrFXIQFbdO4SYesLx5iMOFw7FRPop2nRzh4KOo5XavzQpu1z49eh09Cxk9QZlvmBnC6h7BWbGJK8TerSgV0tSOiKYbZNlwq4joWspr/kMbvXO0/hqUHekdWZLlKSGtNqR2cT69FYD/2Dn4QSiFRyGUc4CVgtf34g26Xa0EwrfGCmJfKUIh9vKrVHZiaJXBjNhp5jEtByNQdybN4BCIkybxayQZ8ZalCeutyhO4DnTi0Gqz1+WY/qEXMBipSm2UXMB9NkkTRkNXtg7MY7aeDTsvwejs1OSc/5Zf")
      .then(response => response.json())
      .then(data => {
        const games = document.getElementById("games");
        let i = 0;
        const renderGame = () => {
          const game = data[i];
          const li = document.createElement("li");
          const img = document.createElement("img");
          img.src = game.thumb;
          const title = document.createElement("div");
          title.classList.add("title");
          title.textContent = game.title;
          const buyButton = document.createElement("button");
          buyButton.classList.add("buy-button");
          buyButton.textContent = "Detalhes";
           const price = document.createElement("div");
          price.classList.add("price");
          price.textContent = `R$ ${game.normalPrice}`;
          const percentSymbol = document.createElement("button");
percentSymbol.textContent = "%";
price.appendChild(percentSymbol);
          li.appendChild(img);
          li.appendChild(title);
          li.appendChild(buyButton);
                    li.appendChild(price);

          games.appendChild(li);
          i++;
          if (i < data.length) {
            renderGame();
          }
        };
        renderGame();
      })
      .catch(error => console.error(error));


const priceOrderSelect = document.getElementById("price-order");
const gamesList = document.getElementById("games");

priceOrderSelect.onchange = function() {
  const sortOrder = priceOrderSelect.value;
  const games = Array.from(gamesList.children);
  games.sort((a, b) => {
    const aPrice = parseFloat(a.querySelector(".price").textContent.replace("R$", ""));
    const bPrice = parseFloat(b.querySelector(".price").textContent.replace("R$", ""));
    if (sortOrder === "high-to-low") {
      return bPrice - aPrice;
    } else {
      return aPrice - bPrice;
    }
  });
  games.forEach(game => gamesList.appendChild(game));
};


priceOrderSelect.onchange = function() {
  const sortOrder = priceOrderSelect.value;
  const games = Array.from(gamesList.children);
  if (sortOrder === "title") {
    games.sort((a, b) => {
      const aTitle = a.querySelector(".title").textContent.toLowerCase();
      const bTitle = b.querySelector(".title").textContent.toLowerCase();
      if (aTitle < bTitle) return -1;
      if (aTitle > bTitle) return 1;
      return 0;
    });
  } else {
    games.sort((a, b) => {
      const aPrice = parseFloat(a.querySelector(".price").textContent.replace("R$", ""));
      const bPrice = parseFloat(b.querySelector(".price").textContent.replace("R$", ""));
      if (sortOrder === "high-to-low") {
        return bPrice - aPrice;
      } else {
        return aPrice - bPrice;
      }
    });
  }
  games.forEach(game => gamesList.appendChild(game));
};