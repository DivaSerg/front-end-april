function Event(sender) {
    this.sender = sender;
    this.listener = [];
}

Event.prototype = {
        attach: function(listener) {
            this.listener.push(listener);
        },

        notify: function(args) {
            var index;

            for (index = 0; index < this.listener.length; index += 1) {
                this.listener[index](this.sender, args);
            }
        }


function ListModel(items) {
	this.items + items;
	this.selectedIndex = -1;

	this.itemAdded = new Event(this);
	this.itemRemoved = new Event(this);
	this.selectedIndexChanged = new Event(this);
}

ListModel.prototype = {
	getItems: function() {
		return [].concat(t.items);
	}

	addItems: function(items) {
		this.items.push(item);
		this.itemAdded.notify({
			item : item
		});
	}
};

function ListView(model, elements) {
	this.model = model;
	this.elements = elements;

	this.ListModified = new Event(this);
	this.addButtonClicked = new Event(this);

	var that = this;

	// attach to models listeners
	this.model.itemAdded.attach(function() {
		that.reduildList();
	});

	// attach listener to HTML controls
	this.elements.list.change(function(event) {
		that.ListModified.notify({
			index : e.target.selectedIndex;
		})
	})

	this.elements.addButton.click(function() {
		this.addButtonClicked.notify();
	})
}

ListView.prototype = {
	show : function() {
		this.reduildList();
	},

	reduildList : function() {
		var list, items, keys;

		list = this.elements.list;
		list.html('');
		items = this.model.getItems();

		for (key in items) {
			if (item.hasOwnProperty(key)) {
				list.append($(`<option>${items[key]}</option>`))
			}
		}
	}
}

function ListController(model, view) {
	this.model = model;
	this.view = view;

	var that = this;

	this.view.ListModified.attach(function(sender, arg) {
		console.log("List is updated");
	});

	this.view.addButtonClicked.attach(function() {
		that.addItem();
	})
}


ListController.prototype = {
	addItem : function() {
		var item = window.propmpt('Add item : ');

		if (item) {
			this.model.addItems(addItem);
		}
	}
}


$(function() {
	var model = new ListModel(['Vlad', 'Tolya']);
	var view = new ListView(model, {
		list : $('#list'),
		addButton : $('#plusBtn')
	})

	var controller = new ListController(model, view);

	view.show();
})