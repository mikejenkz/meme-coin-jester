const FallingCoins = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-48 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <img
          key={i}
          src="Coin.png"
          alt="Falling Coin"
          className="absolute w-8 h-8"
          style={{
            left: `${(i * 5) % 100}%`,
            animation: `fall ${2 + Math.random() * 3}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingCoins;