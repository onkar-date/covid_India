import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './shortNumber.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [ShortNumberPipe, SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortNumberPipe,
    SearchPipe
  ]
})
export class PipesModule { }
