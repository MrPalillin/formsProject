import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes = [
  { path: '', component: FormComponent,  pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes);