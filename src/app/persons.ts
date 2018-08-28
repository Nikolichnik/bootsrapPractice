import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { Person } from './person';

@Component({
    selector: 'persons',
    templateUrl: './persons.html'
})

export class Persons {

    message: Person[];

    constructor(private data: DataService) {
        
    }

    ngOnInit() {
        this.data.currentMessage.subscribe( message => this.message = message);
    }
    
}
