export class Service {

    constructor() {
        this._persons = [{
            "id": 0,
            "first_name": "Brandon",
            "last_name": "Martin",
            "email": "bmartin0@go.com",
            "gender": "Male"
        }]
    }

    updatePrsonInfo(id, person) {
        this._person[id] = person;
        return this._person[id];
    }

    setPersonInfo(person) {
        this._persons.push(person);
        return person;
    }

    getAllPersons() {
        return this._persons;
    }

    getOnePerson(id) {
        return this._persons[id];
    }

}