import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultClientComponent } from './consult.client.component'
import { ConsultClientModule } from './consult.client.module'

describe('FormComponent', () => {
  let component: ConsultClientComponent
  let fixture: ComponentFixture<ConsultClientComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultClientModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultClientComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
