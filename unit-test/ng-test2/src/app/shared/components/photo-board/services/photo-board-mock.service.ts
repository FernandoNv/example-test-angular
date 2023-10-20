import { Observable, of } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { PhotoBoardService } from './photo-board.service';
import { buildPhotoList } from '../test/buld-photo-list';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService{

  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}