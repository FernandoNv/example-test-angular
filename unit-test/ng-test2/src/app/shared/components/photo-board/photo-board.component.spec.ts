import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotoList } from './test/buld-photo-list';

describe(PhotoBoardComponent.name, ()=>{
  let fixture: ComponentFixture<PhotoBoardComponent> = null;
  let component: PhotoBoardComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should create`, ()=>{
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`, ()=>{
    const photos = buildPhotoList();
    
    component.photos = photos;
    // fixture.detectChanges();
    const changes: SimpleChanges = {
      photos: new SimpleChange([], photos, true)
    };
    component.ngOnChanges(changes);

    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2);

    expect(component.rows[0].length)
      .withContext('Number os columns from the first row')
      .toBe(4);

    expect(component.rows[1].length)
      .withContext('Number os columns from the second row')
      .toBe(4);
  });

});