class TradingController {
    private coinbaseService: CoinbaseService;
    private tradingAlgorithm: TradingAlgorithm;

    constructor(coinbaseService: CoinbaseService, tradingAlgorithm: TradingAlgorithm) {
        this.coinbaseService = coinbaseService;
        this.tradingAlgorithm = tradingAlgorithm;
    }

    public async buy(req: Request, res: Response): Promise<void> {
        try {
            const marketData = await this.coinbaseService.getMarketData();
            const decision = this.tradingAlgorithm.analyzeMarket(marketData);

            if (decision.shouldBuy) {
                const trade = await this.coinbaseService.executeTrade('buy', decision.amount);
                res.status(200).json(trade);
            } else {
                res.status(200).json({ message: 'No buy action taken' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async sell(req: Request, res: Response): Promise<void> {
        try {
            const marketData = await this.coinbaseService.getMarketData();
            const decision = this.tradingAlgorithm.analyzeMarket(marketData);

            if (decision.shouldSell) {
                const trade = await this.coinbaseService.executeTrade('sell', decision.amount);
                res.status(200).json(trade);
            } else {
                res.status(200).json({ message: 'No sell action taken' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default TradingController;