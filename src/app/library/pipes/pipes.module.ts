import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './shortNumber.pipe';

@NgModule({
  declarations: [ShortNumberPipe],
  imports: [
CommonModule
  ],
  exports: [
    ShortNumberPipe
  ]
})
export class PipesModule { }
