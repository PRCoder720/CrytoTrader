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
            throw new Error(`Error fetching market data: ${error.message}`);
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
            throw new Error(`Error buying currency: ${error.message}`);
        }
    }

    public async sellCurrency(amount: number, currency: string): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/sells`, {
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
            throw new Error(`Error selling currency: ${error.message}`);
        }
    }
}

export default CoinbaseService;