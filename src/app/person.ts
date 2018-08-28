import { Component } from '@angular/core';

@Component({
    selector: 'person',
    templateUrl: 'person.html'
})

export class Person {

    email: string;
    pass: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: number

    constructor(email: string, pass: string, address: string, address2: string, city: string, state: string, zip: number) {

    }

}