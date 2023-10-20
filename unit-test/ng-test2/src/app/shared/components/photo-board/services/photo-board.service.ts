import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { delay, map, tap } from 'rxjs/operators';

@Injectable()
export class PhotoBoardService{
  private apiUrl: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient){}

  public getPhotos(): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`${this.apiUrl}/photos`)
      .pipe(delay(2000))
      .pipe(
        map((photos)=> photos.map((photo) => ({...photo, description: photo.description.toUpperCase()}))),
      );
  }
}