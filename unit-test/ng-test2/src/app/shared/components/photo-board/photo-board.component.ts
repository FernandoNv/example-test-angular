import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  template: `
    <div class="photo-board">
      <ol>
        <li *ngFor="let cols of rows">
          <div class="cols" *ngFor="let photo of cols">
            <app-photo-frame
              [src]="photo.url"
              [description]="photo.description"
            ></app-photo-frame>
          </div>
        </li>
      </ol>
    </div>
  `,
  styles: [
    `
      .cols{
        width: 25%;
        display: inline-block;
      }
    `
  ]
})
export class PhotoBoardComponent implements OnChanges{
  @Input('photos')
  public photos: Photo[] = [];

  public rows: any[][] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){ 
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;

    for(let index = 0; index < photos.length; index += step){
      newRows.push(photos.slice(index, index + step));
    }

    return newRows; 
  }
}