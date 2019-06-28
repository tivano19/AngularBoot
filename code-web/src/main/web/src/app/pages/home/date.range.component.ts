import {OnInit, Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RangeDates} from './wrapper.date';




@Component({
    selector: 'date-range',
    templateUrl: './date.range.component.html'
})
export class DateRangeComponent implements OnInit {

    @ViewChild('myCalendar') public datePicker;

    @Input()  public wrapperDate: RangeDates;

    @Output() public apply: EventEmitter<any> = new EventEmitter();

    constructor(private datepipe: DatePipe) {
    }

    public ngOnInit(){}


    public nextDay(event: any) {
        this.wrapperDate.rangeDates = [];
        this.wrapperDate.rangeDates.push(new Date(2018,12,3));
        this.wrapperDate.rangeDates.push(new Date(2018,12,12));
        console.log('nextDay nextDay' + new Date(2018,12,3));
    }

    public lastDay(event: any) {
        this.wrapperDate.rangeDates = [];
        this.wrapperDate.rangeDates.push(new Date(2018,12,5));
        this.wrapperDate.rangeDates.push(new Date(2018,12,10));

        console.log('lastDay lastDay' + new Date(2018,12,5));
    }

    public onApply() {
        console.log(this.wrapperDate.rangeDates);
        this.datePicker.overlayVisible = false;
        this.apply.emit(this.wrapperDate.rangeDates);
    }
}