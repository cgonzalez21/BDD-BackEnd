import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NewPurchaseComponent } from './new.purchase.component'
import { NewPurchaseModule } from './new.purchase.module'

describe('NewPurchaseComponent', () => {
  let component: NewPurchaseComponent
  let fixture: ComponentFixture<NewPurchaseComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NewPurchaseModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPurchaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
