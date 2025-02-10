import axios from 'axios';

export class ApiService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:5000/api'; // Adjust the base URL as needed
    }

    public async fetchTradingInfo(): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/trading-info`);
            return response.data;
        } catch (error) {
            console.error('Error fetching trading info:', error);
            throw error;
        }
    }

    public async executeTrade(tradeData: any): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/execute-trade`, tradeData);
            return response.data;
        } catch (error) {
            console.error('Error executing trade:', error);
            throw error;
        }
    }
}