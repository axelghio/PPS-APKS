import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaChatBComponent } from './sala-chat-b.component';

describe('SalaChatBComponent', () => {
  let component: SalaChatBComponent;
  let fixture: ComponentFixture<SalaChatBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaChatBComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaChatBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
