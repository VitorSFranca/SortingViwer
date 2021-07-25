import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwerCreatorComponent } from './viwer-creator.component';

describe('ViwerCreatorComponent', () => {
  let component: ViwerCreatorComponent;
  let fixture: ComponentFixture<ViwerCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwerCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
