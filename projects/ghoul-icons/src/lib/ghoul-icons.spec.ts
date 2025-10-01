import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhoulIcons } from './ghoul-icons';

describe('GhoulIcons', () => {
  let component: GhoulIcons;
  let fixture: ComponentFixture<GhoulIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhoulIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(GhoulIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
