import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingButtonDirective} from './loading-button.directive';
import {EnumUtils} from './enum.utils';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingButtonDirective
  ],
  exports: [
    LoadingButtonDirective
  ]
})
export class SharedModule {
}
