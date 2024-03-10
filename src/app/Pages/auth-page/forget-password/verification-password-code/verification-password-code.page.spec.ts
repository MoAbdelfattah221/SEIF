import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificationPasswordCodePage } from './verification-password-code.page';

describe('VerificationPasswordCodePage', () => {
  let component: VerificationPasswordCodePage;
  let fixture: ComponentFixture<VerificationPasswordCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationPasswordCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationPasswordCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
