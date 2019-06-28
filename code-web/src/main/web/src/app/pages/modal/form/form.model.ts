import {Deserializable} from '../../../core/models';

export class FormModel implements Deserializable {

    id: number ;

    tplName: String;

    field1: number ;

    field2: String ;

    field3: Date;

    field4: String;

    field5: String;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}