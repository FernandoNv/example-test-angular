import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoBoardService } from './photo-board.service';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      src: 'http://someimagem.com/img1.jpg',
      description: 'example 1'
    },
    {
      id: 2,
      src: 'http://someimagem.com/img2.jpg',
      description: 'example 2'
    },
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService = null;
  let httpController: HttpTestingController = null;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService]  
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);

  });

  //Verifica se durante o teste algum requisição foi 
  //realizada sem que houvesse uma resposta 
  //programática para ele por parte do teste.
  afterEach(() => httpController.verify());

  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos with description in uppercase`, (done) =>{
    
    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe("EXAMPLE 1");
      expect(photos[1].description).toBe("EXAMPLE 2");
      done();
    });

    //ele que despara a requisição
    httpController
      .expectOne(mockData.api)
      .flush(mockData.data);
  });

});