import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
    ValidatorFn,
    FormArray
} from '@angular/forms';
import {TreeNode} from "primeng/api";


@Component({
    selector: 'tree-table-modal',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

    @Input() title = `Information`;

    @Input() id: any;

    // Left component listCheckBox
    option: any[];
    selectedCategories: string[] = ['Technology', 'Sports'];

    // Right component
    rows: any[];
    customForm: FormGroup;
    items: FormArray;

    // Botom component
    hideObsolete: boolean = true;

    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder
    ) {
        this.option = this.createOptions();
        this.rows = this.createRows();
        this.customForm = this.fb.group({
            items: this.fb.array([this.buildEmptyItem()])
        });
        this.items = this.customForm.get('items') as FormArray;

        this.initialiseItems();
    }

    ngOnInit() {

    }


    private buildEmptyItem(): FormGroup {
       return this.buildItem({
            key: '',
            name: '',
            value: '',
            checked: false,
            disabled: false,
            readOnly: false
        });

    }
    private buildItem(data: any): FormGroup {
        // center: [data.value, Validators.required],
        return this.fb.group({
            center: data.value,
            active: data.checked
        });
    }

    private initialiseItems(): void {
        for(let i = 0; i < this.rows.length; i++) {
            let data = this.rows[i];
            this.items.push(this.buildItem(data));
        }

        this.items.removeAt(0);
        console.log(this.items.value);
    }


    public onCheckBoxClic(event: any, key: any) {
        console.log('onRowClic: ' + event);
        console.log('onRowClic: ' + key);
    }

    public onHideObsole(event: any) {
        console.log('onRowClic: ' + event);
        console.log('this.hideObsolete : ' + this.hideObsolete);
    }


    public addElement(){
        this.items = this.customForm.get('items') as FormArray;
        this.items.push(this.buildEmptyItem());
    }


    public saveElement(row: any, index: number) {
        console.log('add element at index: ' + index);
        console.log('row: ' + row);

    }

    public removeElement(row: any, index: number) {
        console.log('index: ' + index);
        console.log('row: ' + row);
        this.items.removeAt(index);
    }

    private createRows(): any[] {

        return [{
            key: 'input1Id',
            name: 'name1',
            value: 'value 1',
            checked: true,
            disabled: true,
            readOnly: true

        },
            {
                key: 'input2Id',
                name: 'name2',
                value: 'value 2',
                checked: true,
                disabled: true,
                readOnly: true

            },
            {
                key: 'input1Id',
                name: 'name3',
                value: 'value 3',
                checked: true,
                disabled: true,
                readOnly: true

            },
        ];
    }

    private createOptions(): any[] {

        return [{
            key: 'Technology',
            name: 'Technology',
            checked: true,
            disabled: true,
            readOnly: true

        },
            {
                key: 'Finance',
                name: 'Finance',
                checked: false,
                disabled: false,
                readOnly: true
            },
            {
                key: 'Sports',
                name: 'Sports',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports1',
                name: 'Sports1',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports2',
                name: 'Sports2',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports3',
                name: 'Sports3',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports4',
                name: 'Sports4',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports5',
                name: 'Sports5',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports6',
                name: 'Sports6',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports7',
                name: 'Sports7',
                checked: true,
                disabled: false,
                readOnly: false
            },
            {
                key: 'Sports8',
                name: 'Sports8',
                checked: true,
                disabled: false,
                readOnly: false
            }];
    }


}