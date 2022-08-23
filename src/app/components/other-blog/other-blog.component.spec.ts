import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBlogComponent } from './other-blog.component';

describe('OtherBlogComponent', () => {
  let component: OtherBlogComponent;
  let fixture: ComponentFixture<OtherBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
