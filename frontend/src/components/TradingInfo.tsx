import React, { useEffect, useState } from 'react';
import { ApiService } from '../services/apiService';

const TradingInfo: React.FC = () => {
    const [tradingData, setTradingData] = useState<any>(null);
    const apiService = new ApiService();

    useEffect(() => {
        const fetchTradingData = async () => {
            try {
                const data = await apiService.getTradingInfo();
                setTradingData(data);
            } catch (error) {
                console.error('Error fetching trading data:', error);
            }
        };

        fetchTradingData();
    }, []);

    return (
        <div>
            <h2>Trading Information</h2>
            {tradingData ? (
                <div>
                    <p>Current Price: {tradingData.currentPrice}</p>
                    <p>24h High: {tradingData.high24h}</p>
                    <p>24h Low: {tradingData.low24h}</p>
                    <p>Volume: {tradingData.volume}</p>
                </div>
            ) : (
                <p>Loading trading data...</p>
            )}
        </div>
    );
};

export default TradingInfo;