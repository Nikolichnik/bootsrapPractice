import { Component } from '@angular/core';

@Component({
    selector: 'person',
    templateUrl: 'person.html'
})

export class Person {

    name: string;
    email: string;
    pass: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: number

    constructor(name?: string, email?: string, pass?: string, address?: string, address2?: string, city?: string, state?: string, zip?: number) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

}