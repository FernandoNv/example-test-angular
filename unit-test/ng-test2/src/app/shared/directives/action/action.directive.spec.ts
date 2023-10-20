import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';
import { ActionDirectiveModule } from './action.module';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent> = null;
  let component: ActionDirectiveTestComponent = null;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction) should emit event with payload when ENTER key is pressed', ()=>{
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-test="dummy-component"]');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    
    divElement.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit event with payload when clicked', ()=>{
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-test="dummy-component"]');
    
    divElement.click();

    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit event with payload when clicked using debugElement', ()=>{
    const divElement: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    
    divElement.click();

    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div data-test="dummy-component"  (appAction)="actionHanlder($event)"></div>`
})
class ActionDirectiveTestComponent{
  private event: Event = null;

  public actionHanlder(event: Event): void{
    this.event = event;
  }

  public hasEvent(): boolean{
    return !!this.event;
  }

}