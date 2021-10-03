import React from "react";
import "./Coin.css";

const Coin = ({
  rank,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>{rank}</h1>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Current Price: ${price.toLocaleString()}</p>
          <p className="coin-volume">Market Cap: ${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">
              Change %: <br />
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              Change %: <br />+{priceChange.toFixed(2)}%
            </p>
          )}

          <p className="coin-marketcap">
            Total Volume:
            <br /> ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
