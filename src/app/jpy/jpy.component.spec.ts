import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpyComponent } from './jpy.component';

describe('JpyComponent', () => {
  let component: JpyComponent;
  let fixture: ComponentFixture<JpyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JpyComponent]
    });
    fixture = TestBed.createComponent(JpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
