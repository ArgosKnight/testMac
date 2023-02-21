"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactuAmountUseCase = void 0;
class FactuAmountUseCase {
    constructor(facturationAmountRepository) {
        this.facturationAmountRepository = facturationAmountRepository;
    }
    execute(startDate, endDa) {
        return this.facturationAmountRepository.sumFactoturationAmount(startDate, endDa);
    }
}
exports.FactuAmountUseCase = FactuAmountUseCase;
