# Backend Cryptocurrency Trading Bot

This is the backend component of the cryptocurrency trading bot project that utilizes the Coinbase API. The backend is built using TypeScript and Express, providing a robust API for trading operations.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, initializes the Express app and sets up middleware and routes.
  - **controllers/**: Contains the TradingController which handles trading operations.
    - **tradingController.ts**: Manages buy and sell actions.
  - **routes/**: Defines the API routes for the application.
    - **index.ts**: Sets up routes and links them to the TradingController.
  - **services/**: Interacts with external APIs and services.
    - **coinbaseService.ts**: Provides methods to fetch market data and execute trades with the Coinbase API.
  - **algorithms/**: Implements trading logic and strategies.
    - **tradingAlgorithm.ts**: Contains methods for analyzing market trends and making trading decisions.
  - **types/**: Defines TypeScript interfaces for type safety.
    - **index.ts**: Contains interfaces for Trade and MarketData.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd crypto-trading-bot/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- **GET /api/trade**: Fetch current trading information.
- **POST /api/trade/buy**: Execute a buy trade.
- **POST /api/trade/sell**: Execute a sell trade.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.