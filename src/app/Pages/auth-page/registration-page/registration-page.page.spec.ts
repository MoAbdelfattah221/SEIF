import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationPagePage } from './registration-page.page';

describe('RegistrationPagePage', () => {
  let component: RegistrationPagePage;
  let fixture: ComponentFixture<RegistrationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
