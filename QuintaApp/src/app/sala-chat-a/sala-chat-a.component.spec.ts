import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaChatAComponent } from './sala-chat-a.component';

describe('SalaChatAComponent', () => {
  let component: SalaChatAComponent;
  let fixture: ComponentFixture<SalaChatAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaChatAComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaChatAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
