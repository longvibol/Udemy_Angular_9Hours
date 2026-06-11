import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForchatgptComponent } from './forchatgpt.component';

describe('ForchatgptComponent', () => {
  let component: ForchatgptComponent;
  let fixture: ComponentFixture<ForchatgptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForchatgptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForchatgptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
