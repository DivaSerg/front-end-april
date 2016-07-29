function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;
    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}
