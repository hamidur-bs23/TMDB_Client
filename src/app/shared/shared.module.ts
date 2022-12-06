import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatedUserComponent } from './components/authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [AuthenticatedUserComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
