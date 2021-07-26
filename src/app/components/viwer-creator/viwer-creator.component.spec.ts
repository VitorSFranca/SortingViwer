import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ViwerCreatorComponent } from './viwer-creator.component';

describe('ViwerCreatorComponent', () => {
  let component: ViwerCreatorComponent;
  let fixture: ComponentFixture<ViwerCreatorComponent>;
  const initialState = {};

  beforeEach(async () => {
    let store: MockStore;
    await TestBed.configureTestingModule({
      declarations: [ViwerCreatorComponent],
      providers: [
        provideMockStore({ initialState }),
        // other providers
      ],
    }).compileComponents();

    // eslint-disable-next-line prefer-const
    store = TestBed.inject(MockStore);
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
