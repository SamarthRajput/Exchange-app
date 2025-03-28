const cryptos = [
    { name: "Bitcoin", change: "+14.04%", price: "49,645 INR", color: "text-green-400" },
    { name: "Ethereum", change: "+43.04%", price: "36,675 INR", color: "text-green-400" },
    { name: "Solana", change: "-14.23%", price: "1,456 INR", color: "text-red-400" },
    { name: "Doge", change: "+17.06%", price: "41,645 INR", color: "text-green-400" },
  ];
  
export const MarketTable = () => {
    return (
      <section className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-white text-2xl text-center">Crypto Market Trade And Metrics</h3>
        <div className="mt-6 bg-gray-900 p-6 rounded-xl">
          {cryptos.map((crypto, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
              <span className="text-white">{crypto.name}</span>
              <span className={`${crypto.color} font-bold`}>{crypto.change}</span>
              <span className="text-white">{crypto.price}</span>
              <button className="px-4 py-1 bg-green-700 text-white rounded-lg hover:bg-green-600">Trade</button>
            </div>
          ))}
        </div>
      </section>
    );
};
  