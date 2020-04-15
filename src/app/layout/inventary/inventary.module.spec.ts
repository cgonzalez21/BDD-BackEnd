import { InventaryModule } from './inventary.module';

describe('FormModule', () => {
    let consult: InventaryModule;

    beforeEach(() => {
        consult = new InventaryModule();
    });

    it('should create an instance', () => {
        expect(consult).toBeTruthy();
    });
});
