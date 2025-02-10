# Crypto Trading Bot

This project is a cryptocurrency trading bot that utilizes the Coinbase API for trading operations. It consists of a backend service built with TypeScript and Express, and a frontend application built with React. The bot implements a trading algorithm to analyze market trends and make buy/sell decisions.

## Project Structure

```
crypto-trading-bot
├── backend
│   ├── src
│   │   ├── app.ts                # Entry point for the backend application
│   │   ├── controllers
│   │   │   └── tradingController.ts # Handles trading operations
│   │   ├── routes
│   │   │   └── index.ts          # Sets up API routes
│   │   ├── services
│   │   │   └── coinbaseService.ts # Interacts with the Coinbase API
│   │   ├── algorithms
│   │   │   └── tradingAlgorithm.ts # Implements trading logic
│   │   └── types
│   │       └── index.ts          # Defines types used in the backend
│   ├── package.json               # Backend npm configuration
│   ├── tsconfig.json              # TypeScript configuration for the backend
│   └── README.md                  # Documentation for the backend
├── frontend
│   ├── src
│   │   ├── App.tsx                # Entry point for the frontend application
│   │   ├── components
│   │   │   └── TradingInfo.tsx     # Displays trading information
│   │   ├── services
│   │   │   └── apiService.ts       # Handles API calls to the backend
│   │   └── types
│   │       └── index.ts            # Defines types used in the frontend
│   ├── package.json                # Frontend npm configuration
│   ├── tsconfig.json               # TypeScript configuration for the frontend
│   └── README.md                   # Documentation for the frontend
├── README.md                       # Overall documentation for the project
└── .gitignore                      # Specifies files to ignore by Git
```

## Features

- **Real-time Trading**: The bot can execute buy and sell orders based on market analysis.
- **Market Data Fetching**: It fetches real-time market data from the Coinbase API.
- **User Interface**: A React frontend displays trading information and statistics.
- **Trading Algorithm**: Implements a trading strategy to make informed decisions.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd crypto-trading-bot
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables for the Coinbase API in the backend.

5. Start the backend server:
   ```
   cd backend
   npm start
   ```

6. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.