import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredContainerComponent } from './centered-container.component';

describe('CenteredContainerComponent', () => {
  let component: CenteredContainerComponent;
  let fixture: ComponentFixture<CenteredContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
