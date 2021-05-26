import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AngularMatImportsModule } from 'src/app/app-common/angular-mat-imports/angular-mat-imports.module';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AngularMatImportsModule
  ],
  exports: [
    CardComponent,
    DetailComponent
  ]
})
export class SharedModule { }
