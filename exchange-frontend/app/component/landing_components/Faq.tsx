export const FAQ = () => {
    const faqs = [
      {
        question: "What is cryptocurrency?",
        answer: "Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.",
        link: true,
      },
      {
        question: "How do I start investing in cryptocurrency?",
        answer: "Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies.",
        link: true,
      },
      {
        question: "What is a blockchain?",
        answer: "A blockchain is a distributed ledger that records transactions across a network of computers.",
        link: true,
      },
      {
        question: "How do I keep my cryptocurrency secure?",
        answer: "Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets.",
        link: true,
      },
      {
        question: "What is a cryptocurrency wallet?",
        answer: "A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.",
        link: true,
      },
      {
        question: "What are the most popular cryptocurrencies?",
        answer: "Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana.",
        link: true,
      },
    ];
  
    return (
      <section className="text-white py-16 text-center">
        {/* Top Button */}
        <button className="px-6 py-2 bg-green-400 text-black font-bold rounded-full hover:bg-green-300 mb-6">
          FAQs
        </button>
  
        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-300 max-w-xl mx-auto mt-3">
          Follow design trends and continually update your skills by learning new tools and techniques.
        </p>
  
        {/* FAQs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <h3 className="text-lg font-bold">{faq.question}</h3>
              {faq.link ? (
                <a href="#" className="text-blue-400 hover:underline">
                  {faq.answer}
                </a>
              ) : (
                <p className="text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
};
  
  