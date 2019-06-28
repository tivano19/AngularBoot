import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {TreeNode} from 'primeng/api';
import {TreeNodeAdapter} from "./tree.node.adapter";
import {Parent} from "./parent";


@Component({
    selector: 'tree-table-modal',
    templateUrl: './tree.table.component.html'
})
export class TreeTableComponent implements OnInit {

    @Input() title = `Information`;

    datas: TreeNode[];

    data: Parent[];

    loading: boolean;

    cols: any[];

    constructor(
        public activeModal: NgbActiveModal
    ) {
    }

    ngOnInit() {
        this.loading = true;
        this.data = this.getDate();
        let adapter: TreeNodeAdapter = new TreeNodeAdapter(this.getDate());

        this.datas = adapter.get();
        console.log(this.datas);
        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];
        this.loading = false;
    }



    public onRowClic(event: any) {
        console.log('onRowClic: ' + event);
        console.log('onRowClic: ' + event.data);
    }


    private getDate(): Parent[] {
        return [
            {
                name: 'Documents',
                size: '75kb',
                type: 'Folder',
                fils: [
                    {
                        nameF: 'Work1',
                        sizeF: '55kb1',
                        typeF: 'Folder1'
                    },
                    {
                        nameF: 'Home2',
                        sizeF: '20kb2',
                        typeF: 'Folder2'

                    }
                ]

            },
            {
                name: 'Pictures',
                size: '150kb',
                type: 'Folder',
                fils: [
                    {

                        nameF: 'barcelona3',
                        sizeF: '90kb3',
                        typeF: 'Picture3'

                    },
                    {
                        nameF: 'primeui.png4',
                        sizeF: '30kb4',
                        typeF: 'Picture4'
                    },
                    {
                        nameF: 'optimus.jpg5',
                        sizeF: '30kb5',
                        typeF: 'Picture5'
                    },
                    {
                        nameF: 'optimus.jpg6',
                        sizeF: '30kb6',
                        typeF: 'Picture6'
                    },
                    {
                        nameF: 'optimus.jpg7',
                        sizeF: '30kb7',
                        typeF: 'Picture7'
                    }
                ]
            }
        ];
    }

}