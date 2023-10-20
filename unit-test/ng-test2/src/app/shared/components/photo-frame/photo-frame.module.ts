import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetModule } from '../like-widget/like-widget.module';
import { PhotoBoardService } from '../photo-board/services/photo-board.service';


@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    LikeWidgetModule,
  ],
  exports: [PhotoFrameComponent],
  providers: [PhotoBoardService]
})
export class PhotoFrameModule { }
