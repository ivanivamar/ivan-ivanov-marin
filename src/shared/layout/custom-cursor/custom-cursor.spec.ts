import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CustomCursor} from './custom-cursor';

describe('CustomCursor', () => {
    let component: CustomCursor;
    let fixture: ComponentFixture<CustomCursor>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CustomCursor]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CustomCursor);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update position on mouse move', () => {
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: 100,
            clientY: 200,
        });
        window.dispatchEvent(mouseEvent);
        fixture.detectChanges();

        const cursorElement = fixture.nativeElement.querySelector('.custom-cursor');
        expect(cursorElement.style.transform).toBe('translate3d(100px, 200px, 0)');
    });
});
