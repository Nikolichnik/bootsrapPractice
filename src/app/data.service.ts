import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Person } from './person';

@Injectable()

export class DataService {

    private persons = [] as Person[];
    private messageSource = new BehaviorSubject<Person[]>(this.persons);
    currentMessage = this.messageSource.asObservable();

    constructor() {

    }

    changeMessage(message: any) {
        this.messageSource.next(message);
    }

}