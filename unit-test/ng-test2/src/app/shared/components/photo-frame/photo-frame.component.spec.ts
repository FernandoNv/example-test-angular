import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFrameComponent ],
      imports: [LikeWidgetModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //FakeAsync is used to test actions after an exact time
  it(`#${PhotoFrameComponent.prototype.onLike.name}
    should trigger (@Output liked) once when called 
    multiple times within debounce time `, fakeAsync(() => {
      //Arrange
      fixture.detectChanges();
      let times = 0;
      component.liked.subscribe(() => times++);
      
      //Act
      component.onLike();
      component.onLike();
      tick(500);

      //Assert
      expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.onLike.name}
    should trigger (@Output liked) two times when called 
    outside debounce time `, fakeAsync(() => {
      fixture.detectChanges();
      let times = 0;
      let cont = 10;
      component.liked.subscribe(()=> times++);

      for(let i = 0; i < cont; i++) component.onLike();
      tick(500);
      for(let i = 0; i < cont; i++) component.onLike();
      tick(500);

      expect(times).toBe(2);
  }));

  it(`(D) Should display number of likes when (@Input likes) is incremented`, () => {
    fixture.detectChanges();

    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('[data-test="like-widget-span-likes"]');
    
    expect(element.textContent.trim()).toBe("1");
  });

  it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
    fixture.detectChanges();

    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('[data-test="like-widget-span-likes"]');
    
    expect(element.getAttribute('aria-label')).toBe("1: people liked");
  });

  it(`(D) Should update aria-label with 0 (@Input likes) is incremented`, () => {
    fixture.detectChanges();

    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('[data-test="like-widget-span-likes"]');
    
    expect(element.textContent.trim()).toBe("1");
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    fixture.detectChanges();
    const src = 'http://somesite.com.br/img.jpg';
    const description = 'some description';

    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const element:HTMLElement = fixture.nativeElement.querySelector('[data-test="photo-frame-image"]');
    
    expect(element.getAttribute('src')).toBe(src);
    expect(element.getAttribute('alt')).toBe(description);
  });

  it(`(D) Should display number of likes when clicked`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterElement: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

      expect(counterElement.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContaierElement: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    likeWidgetContaierElement.click();
  });

  it(`(D) Should display number of likes when ENTER key is pressed`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterElement: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

      expect(counterElement.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContaierElement: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: "Enter" });
    likeWidgetContaierElement.dispatchEvent(event);
  });
});
