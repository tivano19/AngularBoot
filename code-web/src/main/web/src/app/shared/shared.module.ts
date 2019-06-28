import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeng-module/prime-ng.module';
import { ListErrorsComponent } from './components/list-errors.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        PrimeNgModule
    ],
    declarations: [
        ListErrorsComponent,
        ShowAuthedDirective
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ListErrorsComponent,
        RouterModule,
        ShowAuthedDirective,
        PrimeNgModule
    ]
})
export class SharedModule {}