export class WrapperDate implements RangeDates {

    private _rangeDates: Date[] = [];

    constructor() {
        this._rangeDates.push(new Date());
        this._rangeDates.push(new Date());
    }

    public get rangeDates(): Date[] {
        return this._rangeDates;
    }

    public set rangeDates(rangeDate: Date[]) {
        this._rangeDates = rangeDate;
    }
}

export interface RangeDates {

    rangeDates: Date[];

}
