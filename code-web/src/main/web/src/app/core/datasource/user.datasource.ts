import { Injectable } from '@angular/core';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {UserService} from "../services";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../models";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

export class UserDataSource extends DataSource<User> {

    constructor(private userService: UserService) {
        super();
    }

    private userSubject = new BehaviorSubject<User[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();


    loadUsers(id:number,
              filter:string,
              sortDirection:string,
              pageIndex:number,
              pageSize:number) {

        this.loadingSubject.next(true);

        this.userService.getAll().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(users => this.userSubject.next(users));

    }

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        console.log("Connecting data source");
        return this.userSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.userSubject.complete();
        this.loadingSubject.complete();
    }
}