import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Observable } from 'rxjs/Rx';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent, FormModalComponent, TreeTableComponent, SettingsComponent} from '../modal';
import { UserService } from '../../core/services';
import { DetailUser } from '../../core/models/detail.user';

import { ClipboardService } from 'ngx-clipboard';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
    selector: 'ag-full-width-grid',
    templateUrl: 'detail-panel.component.html'
})
export class DetailPanelComponent implements AfterViewInit {

    public items = [
        { name: 'John', otherProperty: 'Foo' },
        { name: 'Joe', otherProperty: 'Bar' }
    ];
    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

    public gridOptions: GridOptions;

    @Input() public title = `Information`;

    @Input() public id: number;

    private rowSelection: any = 'multiple';

    constructor(private _activeModal: NgbActiveModal,
                private _modalService: NgbModal,
                private _mdalConfig: NgbModalConfig,
                private _clipboardService: ClipboardService,
                private userService: UserService) {
        // customize default values of modals used by this component tree
        this._mdalConfig.backdrop = 'static';
        this._mdalConfig.keyboard = false;

        this.gridOptions = <GridOptions>{};
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.columnDefs = this.createColumnDefs();


    }

    public copyToClipboard(event: any) {
        // let newRecordToUpdate = event.data;
        console.log('onCellClicked value : ' + event.value);
        console.log('Cell: (' + event.rowIndex + ',' + event.colDef.field + ')');
        this.copyText(event.value);
    }

    // Sometimes the gridReady event can fire before the angular component is ready to receive it,
    // so in an angular environment its safer to on you cannot safely rely
    // on AfterViewInit instead before using the API
    public ngAfterViewInit() {
        console.log('+++++ this.id : ' + this.id);
    }

    // one grid initialisation, grab the APIs and auto resize the columns to fit the available space
    public onGridReady(params: any): void {
        // fech data
        this.userService.getDetails(this.id).subscribe((callRecords: DetailUser[]) => {
            // asign data to our class property in the end
            this.gridOptions.api.setRowData(callRecords);
            console.log('+++++ ngAfterViewInit : ' + callRecords);
            this.gridOptions.api.sizeColumnsToFit();
        });
    }

    public onRowDoubleClicked(event: any) {
        const rowId: number = event.data.callId;
        console.log('selected row id: ' + rowId);
        this.openFormModal();
        // update node data
        var rowNode = this.gridOptions.api.getRowNode(event.rowIndex);
        console.log('----- 556: ' + rowNode.data);
        var newData = { callId: 656565, duration: 66, switchCode: 'updated'}
        rowNode.setData(newData);
    }

    public refresh(): boolean {
        return false;
    }

    public onCopyRows() {
        this.gridOptions.api.copySelectedRowsToClipboard(true);
    }

    public onCopyRange() {
        this.gridOptions.api.copySelectedRangeToClipboard(true);
    }

    /* To copy any Text */
    private copyText(text) {
        this._clipboardService.copyFromContent(text);
    }

    private openFormModal() {
        const modalRef = this._modalService.open(FormModalComponent,{ size: 'lg', centered: true  });
        modalRef.componentInstance.id = 10; // should be the id

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    private openTreeTableModal() {
        const modalRef = this._modalService.open(TreeTableComponent);
        modalRef.componentInstance.id = 10; // should be the id

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    private openSettingsModal() {
        const modalRef = this._modalService.open(SettingsComponent, { windowClass:'my-modal'  });
        modalRef.componentInstance.id = 10; // should be the id

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }



    private createColumnDefs() {
        return [{headerName: 'Call ID', field: 'callId', cellClass: 'call-record-cell'},
            {headerName: 'Direction', field: 'direction', cellClass: 'call-record-cell'},
            {headerName: 'Number', field: 'number', cellClass: 'call-record-cell'},
            {
                headerName: 'Duration',
                field: 'duration',
                cellClass: 'call-record-cell',
                valueFormatter: this.secondCellFormatter
            },
            {headerName: 'Switch', field: 'switchCode', cellClass: 'call-record-cell'}];

    }

    private secondCellFormatter(params: any) {
        return params.value.toLocaleString() + 's';
    }
}
