import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrviewComponent } from './vrview.component';

describe('VrviewComponent', () => {
  let component: VrviewComponent;
  let fixture: ComponentFixture<VrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
