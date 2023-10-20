import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id.service';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LikeWidgetModule { }
