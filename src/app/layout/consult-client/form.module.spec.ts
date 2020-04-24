import { ConsultClientModule } from './consult.client.module';

describe('FormModule', () => {
    let consult: ConsultClientModule;

    beforeEach(() => {
        consult = new ConsultClientModule();
    });

    it('should create an instance', () => {
        expect(consult).toBeTruthy();
    });
});
