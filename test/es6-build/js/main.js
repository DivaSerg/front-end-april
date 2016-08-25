let data = {
	fname : 'Tolya',
	sname : 'Pachkov'
}


class God {
	constructor() {
		this.skill = "make all happier";
	}
}

class Person extends God {
	constructor(fname, sname) {
		super();
		this.fname = fname;
		this.sname = sname;
	}

	get fullName() {
		return `${this.fname} ${this.sname}`;
	}

	set fullName({fname='Vlad', sname='Pakin'}) {
		this.fname = fname;
		this.sname = sname;
	}
}

const person = new Person();

