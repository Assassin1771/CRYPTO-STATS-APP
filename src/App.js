import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import Footer from "./Footer";
import "./App.css";

var count = 10;
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        //console.log(res.data);
      })
      .catch((error) => alert("Error while fetching data."));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChange1 = (e) => {
    count = e.target.value;
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  var time = new Date();
  time = time.toLocaleTimeString();

  return (
    <div>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text1">CRYPTOWORLD</h1>
          <h6 className="coin-text">CRYPTO IS THE FUTURE</h6>
          <form>
            <input
              className="coin-input"
              type="text"
              onChange={handleChange}
              placeholder="Search a Cryptocurrency..."
            />
            <br />
            <br />
            <input
              className="coin-input"
              type="number"
              onChange={handleChange1}
              placeholder="Number of Cryptos to Display..."
              style={{ color: "white" }}
            />
          </form>
        </div>

        <h1 style={{ fontSize: "20px" }}>Last Updated : {time}</h1>
        <br />
        {filteredCoins.map((coin) => {
          return (
            <Coin
              rank={coin.market_cap_rank}
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;
