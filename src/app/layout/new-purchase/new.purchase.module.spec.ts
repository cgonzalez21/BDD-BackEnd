import { NewPurchaseModule } from './new.purchase.module';

describe('NewPurchaseModule', () => {
    let newPurchase: NewPurchaseModule;

    beforeEach(() => {
        newPurchase = new NewPurchaseModule();
    });

    it('should create an instance', () => {
        expect(newPurchase).toBeTruthy();
    });
});
