import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  template: `
    <div class="photo-frame-container">
      <img
        data-test="photo-frame-image"
        tabindex="0" 
        class="photo" 
        [src]="src" 
        [alt]="description"
      >
      <div class="like-bar">
        <app-like-widget 
          [likes]="likes" 
          (liked)="onLike()"
        ></app-like-widget>
      </div>
    </div>
  `,
  styles: [
    `.photo-frame-container {
        position: relative;
        box-shadow: 
          0 3px 5px -1px rgba(0,0,0,0.2), 
          0 6px 10px 0 rgba(0,0,0,0.14), 
          0 1px 8px 0 rgba(0,0,0,0.12);
        display: inline-block;
        border-radius: 2px 2px;
        line-height:0;

        .like-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0.5rem;
          background: rgba(255, 250, 250, 0.6);
          border-top-right-radius: 5px;
        }
    }`,
  ]
})
export class PhotoFrameComponent implements OnInit, OnDestroy{
  @Input() public description: string = '';
  @Input() public src: string = '';
  @Input() likes: number = 0;
  @Output() public liked: EventEmitter<void> = new EventEmitter<void>();

  private debounceSubject: Subject<void> = new Subject<void>();
  private destroySubject: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  ngOnInit(): void {
    this.debounceSubject
        .asObservable()
        .pipe(
          takeUntil(this.destroySubject),
          debounceTime(500),
        ).subscribe(() => this.liked.emit());
  }

  onLike(): void{
    this.debounceSubject.next();
  }

}
