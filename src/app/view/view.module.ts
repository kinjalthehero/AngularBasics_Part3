import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideComponent } from './inside/inside.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InsideComponent],
  exports: [InsideComponent]
})
export class ViewModule { }
