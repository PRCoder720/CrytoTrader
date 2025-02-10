import axios from 'axios';

class CoinbaseService {
    private apiUrl: string;
    private apiKey: string;
    private apiSecret: string;

    constructor(apiKey: string, apiSecret: string) {
        this.apiUrl = 'https://api.coinbase.com/v2';
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    public async getMarketData(currency: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/prices/${currency}-USD/spot`, {
                headers: {
                    'CB-ACCESS-KEY': this.apiKey,
                    'CB-ACCESS-SIGN': this.apiSecret,
                    'CB-ACCESS-TIMESTAMP': Math.floor(Date.now() / 1000).toString(),
                },
            });
            return response.data.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error fetching market data: ${error.message}`);
            }
            throw new Error('Error fetching market data');
        }
    }
    
    public async buyCurrency(amount: number, currency: string): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/buys`, {
                amount,
                currency,
            }, {
                headers: {
                    'CB-ACCESS-KEY': this.apiKey,
                    'CB-ACCESS-SIGN': this.apiSecret,
                    'CB-ACCESS-TIMESTAMP': Math.floor(Date.now() / 1000).toString(),
                },
            });
            return response.data.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error buying currency: ${error.message}`);
            }
            throw new Error('Error buying currency');
        }
    }
}

export default CoinbaseService;