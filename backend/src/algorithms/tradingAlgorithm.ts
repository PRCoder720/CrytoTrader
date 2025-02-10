export class TradingAlgorithm {
    private buyThreshold: number;
    private sellThreshold: number;

    constructor(buyThreshold: number, sellThreshold: number) {
        this.buyThreshold = buyThreshold;
        this.sellThreshold = sellThreshold;
    }

    public analyzeMarket(marketData: any): string {
        const currentPrice = marketData.currentPrice;
        const historicalPrices = marketData.historicalPrices;

        const averagePrice = this.calculateAverage(historicalPrices);

        if (currentPrice < averagePrice * this.buyThreshold) {
            return 'buy';
        } else if (currentPrice > averagePrice * this.sellThreshold) {
            return 'sell';
        } else {
            return 'hold';
        }
    }

    private calculateAverage(prices: number[]): number {
        const total = prices.reduce((acc, price) => acc + price, 0);
        return total / prices.length;
    }
}