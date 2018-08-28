import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Person } from './person';
import { Persons } from './persons';

import { DataService } from './data.service';

@Component({
    selector: 'myForm',
    templateUrl: './my.form.html'
})

// @NgModule({
//     declarations: [
//         myForm
//     ],
//     exports: [
//         myForm
//     ]
// })

export class myForm implements OnInit {

    private person = new Person;

    message: Person[];

    constructor(private data: DataService) {

    }

    ngOnInit() {
        this.data.currentMessage.subscribe( message => this.message = message);
    }

    public submit(empForm: any, event: Event) {
        event.preventDefault();

        this.message.push(this.person);
        this.data.changeMessage(this.message);

        this.person = new Person;

        // console.log('possibly added person ' + this.message.length);
    }

    public clear(empForm: any, event: Event) {
        this.message.splice(0, this.message.length)
        this.data.changeMessage(this.message);
    }

}