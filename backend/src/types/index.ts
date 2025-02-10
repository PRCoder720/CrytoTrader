export interface Trade {
    id: string;
    type: 'buy' | 'sell';
    amount: number;
    price: number;
    timestamp: Date;
}

export interface MarketData {
    symbol: string;
    price: number;
    volume: number;
    change: number;
    timestamp: Date;
}