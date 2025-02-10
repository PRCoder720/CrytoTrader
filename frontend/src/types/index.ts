export interface TradingInfo {
    id: string;
    symbol: string;
    price: number;
    volume: number;
    changePercentage: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}