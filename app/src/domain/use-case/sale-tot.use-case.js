"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleTotUseCase = void 0;
class SaleTotUseCase {
    constructor(saleTotRepository) {
        this.saleTotRepository = saleTotRepository;
    }
    execute(startDate, endDate) {
        return this.saleTotRepository.sumSaleTotal(startDate, endDate);
    }
}
exports.SaleTotUseCase = SaleTotUseCase;
