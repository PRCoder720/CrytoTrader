import { Router } from 'express';
import TradingController from '../controllers/tradingController';

const router = Router();
const tradingController = new TradingController();

export function setRoutes(app: Router) {
    app.post('/api/trade/buy', tradingController.buy);
    app.post('/api/trade/sell', tradingController.sell);
    app.get('/api/trade/status', tradingController.getStatus);
}