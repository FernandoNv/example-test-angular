import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';

@Component({
  selector: 'app-photo-list',
  template: `
    <app-photo-board 
      *ngIf="(photos$ | async) as photos; else loader"
      [photos]="photos"
    ></app-photo-board>
    <ng-template #loader>
      <fa-icon class="loader" [icon]="fa.faCircleNotch" [spin]="true" size="4x" aria-busy="true"></fa-icon>
    </ng-template>
  `,
  styles: [
    `
      fa-icon{
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%)
      }
    `
  ]
})
export class PhotoListComponent implements OnInit{

  public photos$: Observable<Photo[]>;
  public fa = { faCircleNotch };
  
  constructor(private photoBoardService: PhotoBoardService){}

  public ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }

}