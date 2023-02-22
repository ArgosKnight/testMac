"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAmountUseCase = void 0;
class SaleAmountUseCase {
    constructor(saleAmountRepository) {
        this.saleAmountRepository = saleAmountRepository;
    }
    execute(startDate, endDate) {
        return this.saleAmountRepository.sumSalesAmount(startDate, endDate);
    }
}
exports.SaleAmountUseCase = SaleAmountUseCase;
