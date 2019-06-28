import {Component, Output, EventEmitter, Input, AfterViewInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal, ModalDismissReasons, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {FormModel} from './form.model';
import {DynamicModel} from './dynamic.model';
import {FieldInterface, Validator} from './field.interface';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-form-modal',
    templateUrl: './form.modal.component.html'
})
export class FormModalComponent implements AfterViewInit {

    @Input() public id: number;

    public myForm: FormGroup;

    public model: any;

    public dynamicModel: FieldInterface[];

    public submitted = false;

    constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder,
                private messageService: MessageService) {
        this.createForm();
    }

    public ngAfterViewInit() {
        console.log('-------- param id : ' + this.id);
    }

    private createForm() {
        // FIXME: fech data from server
        this.dynamicModel = this.createFormData();
        this.model = this.transformToFormModel(this.dynamicModel);

        this.myForm = this.formBuilder.group(this.model);
    }

    private prepareSave(): FormModel {
        return new FormModel().deserialize(this.myForm.value);
    }

    // convenience getter for easy access to form fields

    public get form() {
        return this.myForm;
    }

    public fieldControl(element: string): any {
        return this.myForm.controls[element];

    }

    private submitForm() {
        this.submitted = true;

        const model: FormModel = this.prepareSave();
        console.log('on submitForm()' + model);
        // this.activeModal.close(model);
        if (this.myForm.invalid) {
            console.log('invalid form');
        }
    }

    private reset() {
        this.myForm.setValue(this.getOriginModel(this.dynamicModel));
        this.showTopLeft();
    }

    private showTopLeft() {
        this.messageService.add(
            {key: 'tl',
                severity: 'info',
                summary: 'Success Message',
                detail: 'Order submitted'
            });
    }

    private createFormData() {
        return [
            {
                label: 'Field1',
                name: 'field1',
                type: 'input',
                inputType: 'text',
                value: '',
                oldValue: 'field1 old',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.compose(
                    [Validators.required, Validators.pattern(/^-?(0|(?:[0-9]+(?:\.[0-9]{0,2})?))?$/)]
                )]
            },
            {
                label: 'Field2',
                name: 'field2',
                type: 'input',
                inputType: 'text',
                value: 'field22',
                oldValue: 'call-record-cell',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.compose(
                    [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
                )]
            },
            {
                label: 'Field3',
                name: 'field3',
                type: 'input',
                inputType: 'date',
                value: new NgbDate(2018, 12, 23), // '2018-07-22'
                oldValue: '',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.required]
            },
            {
                label: 'Field4',
                name: 'field4',
                type: 'input',
                inputType: 'text',
                value: 'field44',
                oldValue: 'call-record-cell',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.compose(
                    [Validators.required, Validators.pattern(/^-?(0|(\d*\.))?\d+$/)]
                )]
            },
            {
                label: 'Field5',
                name: 'field5',
                type: 'input',
                inputType: 'text',
                value: 'field55',
                oldValue: 'call-record-cell',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.compose(
                    [Validators.required, Validators.pattern(/^-?(0|(\d*\.))?\d+$/)]
                )]
            },
            {
                label: 'Field TextArea2',
                name: 'fieldArea2',
                type: 'textarea',
                inputType: 'textarea',
                value: '',
                oldValue: 'field1 old',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.required]
            },
            {
                label: 'Id',
                name: 'id',
                type: 'input',
                inputType: 'hidden',
                value: '11',
                oldValue: '22',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.required]
            },
            {
                label: 'tplName',
                name: 'tplName',
                type: 'input',
                inputType: 'hidden',
                value: 'tplName',
                oldValue: '22',
                options: new Map([['readonly', false], ['disabled', false]]),
                validations: [Validators.required]
            }
        ];
    }

    private transformToFormModel(dynamicModel: DynamicModel[]) {
        let object: any = {};

        for (let i = 0; i < dynamicModel.length; i++) {
            let model: DynamicModel = dynamicModel[i];

            Object.defineProperty(object, model.name, {
                value: [model.value].concat(model.validations),
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        return object;

    }
    private getOriginModel(dynamicModel: DynamicModel[]) {
        let object: any = {};

        for (let i = 0; i < dynamicModel.length; i++) {
            let model: DynamicModel = dynamicModel[i];

            Object.defineProperty(object, model.name, {
                value: model.value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        return object;

    }

}