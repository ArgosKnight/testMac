"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinCpesUseCase = void 0;
class SinCpesUseCase {
    constructor(sinCpesRepository) {
        this.sinCpesRepository = sinCpesRepository;
    }
    execute(starDate, endDate) {
        return this.sinCpesRepository.sumSinCpesAmount(starDate, endDate);
    }
}
exports.SinCpesUseCase = SinCpesUseCase;
