import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsCardItemComponent } from './rewards-card-item.component';

describe('RewardsCardItemComponent', () => {
  let component: RewardsCardItemComponent;
  let fixture: ComponentFixture<RewardsCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardsCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
