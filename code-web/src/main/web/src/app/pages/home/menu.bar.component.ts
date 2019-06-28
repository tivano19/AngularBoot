import {AfterViewInit, OnInit, Component, ViewChild, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

import {GridOptions} from 'ag-grid/main';
import {ColDef, ColumnApi, GridApi} from 'ag-grid';
import {DetailPanelComponent} from './detail-panel.component';
import {UserService} from '../../core/services/index';
import {DetailUser} from '../../core/models/detail.user';
import {MenuItem} from 'primeng/api';

import {NgbDate, NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { ClipboardService } from 'ngx-clipboard';
import {ParentComponentApi} from "./parent.component.api";
import {WrapperDate} from "./wrapper.date";


@Component({
    selector: 'menu-bar',
    templateUrl: './menu.bar.component.html'
})
export class MenuBarComponent implements OnInit, AfterViewInit {

    @Input() public gridOptions: GridOptions;

    @Input() public cellValue: string;

    @ViewChild('dateRange') public dataRange;

    public wrapperDate: WrapperDate = new WrapperDate();

    public items: MenuItem[];

    constructor(private _modalService: NgbModal,
                private _mdalConfig: NgbModalConfig,
                private _clipboardService: ClipboardService,
                private userService: UserService,
                private datepipe: DatePipe) {
        // customize default values of modals used by this component tree
        this._mdalConfig.backdrop = 'static';
        this._mdalConfig.keyboard = false;

    }

    // Sometimes the gridReady event can fire before the angular component is ready to receive it,
    // so in an angular environment its safer to on you cannot safely rely
    // on AfterViewInit instead before using the API
    public ngAfterViewInit() {
    }

    public onApply(event: any) {
        console.log(`Hello ${event} from parent`);
        console.log(this.wrapperDate);

    }


    ngOnInit() {

        this.items = [
            {
                label: 'Action',
                items: [
                    {label: 'Recompute', icon: 'pi pi-fw pi-cog', title: 'Recompute Event', id: 'RECOMPUTE', disabled: true},
                    {label: 'Validate', icon: 'pi pi-fw pi-cog', title: 'Validate Event', id: 'VALIDATE', disabled: true},
                    {label: 'Process', icon: 'pi pi-fw pi-cog', title: 'Process Event', id: 'PROCESS', disabled: true},
                    {label: 'Skip', icon: 'pi pi-fw pi-cog', title: 'Skip Event', id: 'SKIP', disabled: true},
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {style: {'height': '30px'}, label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {style: {'height': '30px'}, label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];

    }


    public copyToClipboard(value: string) {
        console.log('copyToClipboard cell value : ', value);

        this.copyText(this.cellValue);
    }

    /* To copy any Text */
    private copyText(text) {
        this._clipboardService.copyFromContent(text);
    }


}