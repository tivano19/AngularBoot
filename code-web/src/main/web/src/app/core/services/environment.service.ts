import { Injectable, OnInit } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { EnvSpecific } from '../models/env.specific';
import {HttpClient} from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class EnvironmentSpecificService {

    public envSpecific: EnvSpecific;
    public envSpecificNull: EnvSpecific = null;
    private envSpecificSubject: BehaviorSubject<EnvSpecific> = new BehaviorSubject<EnvSpecific>(null);

    constructor(private http: HttpClient) {
        console.log('EnvironmentSpecificService created');
    }

    public loadEnvironment(): Promise<EnvSpecific> {
        // Only want to do this once - if root page is revisited, it calls this again.
        if (this.envSpecific === null || this.envSpecific === undefined) {
            console.log('Loading env-specific.json');
            // TODO : Swich CONFIG.envSpecific
            return this.http.get(this.getJsonPath())
                .map((data: EnvSpecific) => data)
                .toPromise<EnvSpecific>();
        }
        return Promise.resolve(this.envSpecificNull);
    }

    public setEnvSpecific(es: EnvSpecific) {
        // This has already been set so bail out.
        if (es === null || es === undefined) {
            return;
        }

        console.log('-- CONFIG.envSpecific : ' + CONFIG.envSpecific);
        this.envSpecific = es;
        console.log(this.envSpecific);

        if (this.envSpecificSubject) {
            this.envSpecificSubject.next(this.envSpecific);
        }
    }

    /*
      Call this if you want to know when EnvSpecific is set.
    */
    public subscribe(caller: any, callback: (caller: any, es: EnvSpecific) => void) {
        this.envSpecificSubject
            .subscribe((es) => {
                if (es === null) {
                    return;
                }
                callback(caller, es);
            });
    }

    private getJsonPath(): string {
        let path: string = CONFIG.contextPath;

        switch (CONFIG.envSpecific) {
            case 'prod':
                path = path.concat('/content/events/assets/env/env-prod.json');
                break;
            case 'env1':
                path = path.concat('/content/events/assets/env/env-env1.json');
                break;
            case 'env2':
                path = path.concat('/content/events/assets/env/env-env2.json');
                break;
            default:
                path = path.concat('/content/events/assets/env/env-prod.json');
        }
        return path;
    }
}