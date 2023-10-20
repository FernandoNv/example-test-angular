import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular testing';
}
