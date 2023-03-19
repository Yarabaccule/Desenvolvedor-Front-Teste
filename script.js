
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
          const price = document.createElement("div");
          price.classList.add("price");
          price.textContent = `R$ ${game.normalPrice}`;
          const buyButton = document.createElement("button");
          buyButton.classList.add("buy-button");
          buyButton.textContent = "Comprar";
          li.appendChild(img);
          li.appendChild(title);
          li.appendChild(price);
          li.appendChild(buyButton);
          games.appendChild(li);
          i++;
          if (i < data.length) {
            renderGame();
          }
        };
        renderGame();
      })
      .catch(error => console.error(error));
  