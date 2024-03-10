import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MorePagePage } from './more-page.page';

describe('MorePagePage', () => {
  let component: MorePagePage;
  let fixture: ComponentFixture<MorePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MorePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
