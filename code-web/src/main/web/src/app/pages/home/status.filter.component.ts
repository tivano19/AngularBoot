import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
    selector: 'status-filter-cell',
    templateUrl: './status.filter.component.html'
})
export class StatusFilterComponent implements AfterViewInit {

    public filter = '';
    public params: any;

    public agInit(params: any): void {
        this.params = params;
    }

    public isFilterActive() {
        return true;
        // return this.filter !== '';
    }

    public ngAfterViewInit() {

    }

    public doesFilterPass(params) {
        const value: string = this.params.valueGetter(params.node);
        console.log(params);
        console.log(value);
        return value === 'lb.lounes';
    }

    public getModel() {
        return {filter: this.filter};
    }

    public setModel(model) {
        this.filter = model ? model.filter : '';
    }

    public onSubmit(event) {
        event.preventDefault();

        const filter = event.target.elements.filter.value;

        if (this.filter !== filter) {
            this.filter = filter;
            this.params.filterChangedCallback();
        }
    }

    public onCheckbox(event: any, element: string){
        console.log(this.getModel());
        console.log(element);
        // console.log(event.target.checked);
        this.params.filterChangedCallback();
    }
}