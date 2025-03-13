export const Footer = () => {
    return (
      <footer className=" text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-20 text-sm text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-2">Quick Link</h3>
            <ul className="text-gray-400 space-y-2">
              <li>About Us</li>
              <li>Feature</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Customer Support</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>FAQs</li>
            </ul>
          </div>
  
          {/* Others */}
          <div>
            <h3 className="font-bold mb-2">Others</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Start Trading</li>
              <li>Earn Free Crypto</li>
              <li>Crypto Wallet</li>
              <li>Payment Option</li>
            </ul>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-10">
          © Copyright 2024, all rights reserved by cryptodive
        </div>
      </footer>
    );
};

  