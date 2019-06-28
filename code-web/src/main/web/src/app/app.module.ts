import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AgGridModule } from 'ag-grid-angular';
//
import { ModalComponent, FormModalComponent, TreeTableComponent, SettingsComponent } from './pages/modal';
import { NgbModule, NgbActiveModal, NgbDatepickerModule, NgbDropdownModule, NgbPopoverModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule} from 'primeng/menubar';

import { ClipboardModule } from 'ngx-clipboard';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor, TimingInterceptor } from './core/interceptors';
import { HomeComponent, DetailPanelComponent, MenuBarComponent, DateRangeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { MessageService } from 'primeng/api';
import {StatusFilterComponent} from './pages/home/status.filter.component';
import { ContextMenuModule } from 'ngx-contextmenu';

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        ClipboardModule,
        ContextMenuModule.forRoot(),
        AgGridModule.withComponents([StatusFilterComponent, DetailPanelComponent]),
        NgbModule, NgbDatepickerModule, NgbDropdownModule, NgbPopoverModule, NgbTimepickerModule,

        MenubarModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DetailPanelComponent,
        StatusFilterComponent,
        MenuBarComponent,
        DateRangeComponent,
        ModalComponent,
        TreeTableComponent,
        SettingsComponent,
        FormModalComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {provide: APP_BASE_HREF, useValue: CONFIG.contextPath.concat('/content/events/')},
        NgbActiveModal,
        CookieService,
        DatePipe,
        MessageService
    ],
    bootstrap: [AppComponent],

    entryComponents: [
        ModalComponent, FormModalComponent, TreeTableComponent, SettingsComponent
    ]
})

export class AppModule { }