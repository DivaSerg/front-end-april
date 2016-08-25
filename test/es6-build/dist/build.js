'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = {
	fname: 'Tolya',
	sname: 'Pachkov'
};

var God = function God() {
	_classCallCheck(this, God);

	this.skill = "make all happier";
};

var Person = function (_God) {
	_inherits(Person, _God);

	function Person(fname, sname) {
		_classCallCheck(this, Person);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this));

		_this.fname = fname;
		_this.sname = sname;
		return _this;
	}

	_createClass(Person, [{
		key: 'fullName',
		get: function get() {
			return this.fname + ' ' + this.sname;
		},
		set: function set(_ref) {
			var _ref$fname = _ref.fname;
			var fname = _ref$fname === undefined ? 'Vlad' : _ref$fname;
			var _ref$sname = _ref.sname;
			var sname = _ref$sname === undefined ? 'Pakin' : _ref$sname;

			this.fname = fname;
			this.sname = sname;
		}
	}]);

	return Person;
}(God);

var person = new Person();
