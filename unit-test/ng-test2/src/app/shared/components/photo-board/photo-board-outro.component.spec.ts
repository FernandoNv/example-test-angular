import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { Photo } from './interfaces/photo';
import { Component, ViewChild } from '@angular/core';
import { buildPhotoList } from './test/buld-photo-list';

describe(`${PhotoBoardComponent.name} outro tipo de teste com o ngOnChange utilizando um dummy component`, ()=>{
  let fixture: ComponentFixture<PhotoBoardTestComponent> = null;
  let component: PhotoBoardTestComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should create`, ()=>{
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`, ()=>{
    const photos = buildPhotoList();
    
    component.photos = photos;
    fixture.detectChanges();
    
    expect(component.board.rows.length)
      .withContext('Number of rows')
      .toBe(2);

    expect(component.board.rows[0].length)
      .withContext('Number os columns from the first row')
      .toBe(4);

    expect(component.board.rows[1].length)
      .withContext('Number os columns from the second row')
      .toBe(4);
  });

});

@Component({
  template: ` <app-photo-board [photos]="photos" ></app-photo-board>`
})
class PhotoBoardTestComponent{
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}