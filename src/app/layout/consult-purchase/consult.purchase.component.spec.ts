import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultPurchaseComponent } from './consult.purchase.component'
import { ConsultPurchaseModule } from './consult.purchase.module'

describe('FormComponent', () => {
  let component: ConsultPurchaseComponent
  let fixture: ComponentFixture<ConsultPurchaseComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultPurchaseModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPurchaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
