"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactuTotUseCase = void 0;
class FactuTotUseCase {
    constructor(factuTotRepository) {
        this.factuTotRepository = factuTotRepository;
    }
    execute(startDate, endDate) {
        return this.factuTotRepository.sumFactuTot(startDate, endDate);
    }
}
exports.FactuTotUseCase = FactuTotUseCase;
