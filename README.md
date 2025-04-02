# Swapify Exchange Application

Swapify is a robust exchange application that allows users to track the current share prices of various markets, such as Solana (SOL) and Bitcoin (BTC).

## Tech Stack

### Frontend

- **Next.js** - For building a dynamic and interactive UI.
- **Tailwind CSS** - For responsive and efficient styling.

### Backend

- **Express.js** - For handling backend server logic and API endpoints.
- **WebSocket** - For real-time updates on the order book, Klines, and current trades.
- **Proxy Server** - A Node.js proxy server that communicates with another exchange's backend to bypass CORS restrictions. The proxy server is deployed on an **AWS EC2 instance**.

## Proxy Server Repository

You can find the proxy server's source code here:
[GitHub Repository](https://github.com/SamarthRajput/exchange-proxy-server)

## Getting Started

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/swapify-exchange.git
   ```

### Running the Application

#### Proxy Server Backend

1. Clone the repository
   ```sh
   git clone https://github.com/SamarthRajput/exchange-proxy-server
   ```
2. Install the dependencies
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node index.js
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd exchange-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```

## Contribution

Feel free to fork this repository and submit pull requests to improve the project!
