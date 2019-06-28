import {FieldInterface, Validator} from './field.interface';

export class DynamicModel implements FieldInterface {

    label?: string;

    name?: string;

    type?: string;

    inputType?: string;

    value?: any;

    oldValue?: any;

    options?: Map<string, any>;

    validations?: any[];

}