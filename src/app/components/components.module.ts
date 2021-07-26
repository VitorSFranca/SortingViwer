import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRxModule } from '../ngRx/ngrx.module';
import { ViwerCreatorComponent } from './viwer-creator/viwer-creator.component';
import { ViwerComponent } from './viwer/viwer.component';

@NgModule({
  declarations: [ViwerComponent, ViwerCreatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    NgRxModule,
  ],
  exports: [ViwerComponent, ViwerCreatorComponent],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
