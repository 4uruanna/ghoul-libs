import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhoulComponents } from './ghoul-components';

describe('GhoulComponents', () => {
    let component: GhoulComponents;
    let fixture: ComponentFixture<GhoulComponents>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GhoulComponents],
        }).compileComponents();

        fixture = TestBed.createComponent(GhoulComponents);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
