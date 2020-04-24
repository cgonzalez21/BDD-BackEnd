import { ConsultPurchaseModule } from './consult.purchase.module';

describe('FormModule', () => {
    let consult: ConsultPurchaseModule;

    beforeEach(() => {
        consult = new ConsultPurchaseModule();
    });

    it('should create an instance', () => {
        expect(consult).toBeTruthy();
    });
});
