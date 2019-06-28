export interface Validator {

    name: string;

    validator: any;

    message: string;

}


export interface FieldInterface {

    label?: string;

    name?: string;

    inputType?: string;

    options?: Map<string, any>;

    collections?: any;

    type?: string;

    value?: any;

    validations?: any[];

}