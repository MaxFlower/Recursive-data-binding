import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecursiveComponent } from './recursive/recursive.component';
import { ObjectRecursiveComponent } from './object-recursive/object-recursive.component';
import { ChangeDetectionRecursiveComponent } from './change-detection-recursive/change-detection-recursive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ 
    RecursiveComponent,
    ObjectRecursiveComponent,
    ChangeDetectionRecursiveComponent
  ],
  declarations: [
    RecursiveComponent,
    ObjectRecursiveComponent,
    ChangeDetectionRecursiveComponent
  ]
})
export class DemoModule { }
