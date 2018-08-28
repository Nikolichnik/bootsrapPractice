import { Component } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'persons'
})

export class Persons {
    person: Person = {
        email: 'person@mail.com',
        pass: 'makeAbetterPassword',
        address: '1234 NotMainSt',
        address2: '1235 NotMainSt',
        city: 'Bumblegrad',
        state: 'Neverland',
        zip: 11000
    };

    constructor() {

    }
}
