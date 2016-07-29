// function ElectronDevice() {
// 	var enabled = false;

// 	this.enable = function() {
// 		enabled = true;
// 	};
// 	this.disable = function() {
// 		enabled = false;
// 	};
// }


// function MacBook(battery) {
// 	ElectronDevice.call(this);

// 	var ram = 4;
// 	console.log(ram);
// 	//SETTER
// 	this.setRam = function(value) {
// 		ram = value;
// 	};
// 	//GETTER
// 	this.getRam = function() {
// 		return ram;
// 	}

// 	this.run = function() {
// 		initMotherboard();
// 	}
// }
// var a = new MacBook()

// var animal = {
// 	eats: true
// };
// var rabbit = {
// 	jumps: true
// };
// rabbit._proto_ = animal;

// console.log(rabbit);


// function Animal(name) {
// 	this.name = name;
// 	this.speed = 0;
// }

// Animal.prototype.run = function(speed) {
// 	this.speed += speed;
// 	console.log( this.name + ' бежит, скорость ' + this.speed );
// }

// Animal.prototype.stop = function(speed) {
// 	this.speed = 0;
// 	console.log( this.name + ' стоит ');
// };

// var animal = new Animal(' Зверь');

// console.log(animal);

// function User() {
// 	var FirstName, Surname;

// 	this.setFirstName = function(name) {
// 		FirstName = name;
// 	};
// 	this.setSurname = function(name) {
// 		Surname = name;
// 	};
// 	this.getFullName = function() {
// 		return 	FirstName + " " + Surname;
// 	};
// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");

// console.log( user.getFullName() );



function Machine() {
	this._enabled = false;

	this._enable = function() {
		this._enabled = true;
	};

	this._disable = function() {
		this._enabled = false;
	};
}



function CoffeeMachine(power) {
	Machine.apply(this, arguments);

	var waterAmount = 0;

	this.setwaterAmount = function(amount) {
		waterAmount = amount;
	};

	function onReady() {
		console.log( 'Кофе готов!');
	}

	this.run = function() {
		setTimeout(onReady, 1000);
		if (!this._enabled == false) {return}
		onReady;
	};
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run();

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();

