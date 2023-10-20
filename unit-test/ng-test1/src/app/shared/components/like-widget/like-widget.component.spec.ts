import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id.service';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      providers: [UniqueIdService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInput when (@Input id) is not assigned', () => {
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    //Arrange
    const someId = 'someId';

    //Act
    component.id = someId;
    fixture.detectChanges();

    //Assertion
    expect(component.id).toBe(someId);
  });

  //Version1 - using done: usually used to notify to jasmine that a asyncronous logic has ended
  // it(`#${LikeWidgetComponent.prototype.onLike.name} should trigger emission when called`, (done)=>{
  //   fixture.detectChanges();
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });

  //   component.onLike();
  // });

  //Version2 - using spy: usually used to notify to jasmine that a asyncronous logic has ended
  it(`#${LikeWidgetComponent.prototype.onLike.name} 
  should trigger (@Output liked) emission when called`, ()=>{
    //arrange
    spyOn(component.liked, 'emit');
    fixture.detectChanges();

    //act
    component.onLike();

    //assert
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
