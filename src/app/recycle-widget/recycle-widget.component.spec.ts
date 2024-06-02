import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleWidgetComponent } from './recycle-widget.component';

describe('RecycleWidgetComponent', () => {
  let component: RecycleWidgetComponent;
  let fixture: ComponentFixture<RecycleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecycleWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecycleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
