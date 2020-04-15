import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { InventaryComponent } from './inventary.component'
import { InventaryModule } from './inventary.module'

describe('FormComponent', () => {
  let component: InventaryComponent
  let fixture: ComponentFixture<InventaryComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          InventaryModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
