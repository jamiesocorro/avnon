import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAttachmentsComponent } from './link-attachments.component';

describe('LinkAttachmentsComponent', () => {
  let component: LinkAttachmentsComponent;
  let fixture: ComponentFixture<LinkAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkAttachmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
