import {Service} from './services.js';

export class Person {
    constructor() {     
        this.service = new Service();
    }


    getAllPersons() {
        return this.service.getAllPersons();
    }
}
