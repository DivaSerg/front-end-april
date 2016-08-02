/*
	Observable pattern for watching for our items in collections
*/
function Event(sender) {
    this.sender = sender;
    this.listener = [];
}

Event.prototype = {

    attach: function(listener) {

        this.listener.push(listener);
    },

    notify: function(args) {
    	console.log(args);
        var index;

        for (index = 0; index < this.listener.length; index += 1) {
            this.listener[index](this.sender, args);
        }
    }
}

/*

	Model for working with our items in select tag
*/
function ListModel(items) {
    this.items = items;
    this.selectedIndex = -1;

    this.itemAdded = new Event(this);
    this.itemRemoved = new Event(this);
    this.selectedIndexChanged = new Event(this);
}

ListModel.prototype = {

    getItems: function() {
        return [].concat(this.items);
    },

    addItems: function(item) {
        this.items.push(item);
        this.itemAdded.notify({
            item: item
        });
    },

    removeItemAt: function(index) {
        var item;
        item = this.items[index];
        this.items.splice(index, 1);
        this.itemRemoved.notify({
            item: item
        })

        if (index === this.selectedIndex) {

            this.setSelectedIndex(-1);
        }
    },

    getSelectedIndex: function() {
        return this.selectedIndex;
    },

    setSelectedIndex: function(index) {
    	console.log("model setSelectedIndex : ", index);
        var previousIndex;

        previousIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.selectedIndexChanged.notify({
            previous: previousIndex
        })
    }
};

function ListView(model, elements) {
    this.model = model;
    this.elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var that = this;

    // attach to models listeners
    this.model.itemAdded.attach(function() {
        that.rebuildList();
    });

    this.model.itemRemoved.attach(function() {
        that.rebuildList();
    })

    // attach  listener to HTML controls 
    this.elements.list.change(function(event) {
        that.listModified.notify({
            index: event.target.selectedIndex
        })
    })

    this.elements.addButton.click(function() {
        that.addButtonClicked.notify();
    })

    this.elements.delbutton.click(function() {
        that.delButtonClicked.notify();
    })

}

ListView.prototype = {
    show: function() {
        this.rebuildList();
    },

    rebuildList: function() {
        var list, items, keys;

        list = this.elements.list;
        list.html('');

        items = this.model.getItems();

        for (key in items) {
            if (items.hasOwnProperty(key)) {
                list.append($(`<option>${items[key]}</option>`))
            }
        }
    }
}

function ListController(model, view) {
    this.model = model;
    this.view = view;

    var that = this;

    this.view.listModified.attach(function(sender, arg) {
        that.updateSelected(arg.index)
    });

    this.view.addButtonClicked.attach(function() {
        that.addItem();
    })

    this.view.delButtonClicked.attach(function() {
        that.delItem();
    })

}


ListController.prototype = {
    addItem: function() {
        var item = window.prompt('Add item : ');

        if (item) {
            this.model.addItems(item);
        }
    },

    delItem: function() {
        var index;
        index = this.model.getSelectedIndex();
        if (index !== -1) {
            this.model.removeItemAt(index);
        }
    },

    updateSelected : function(index) {
    	this.model.setSelectedIndex(index);
    }
}

$(function() {
    var model = new ListModel(['Vlad', 'Tolya']);
    var view = new ListView(model, {
        list: $('#list'),
        addButton: $('#plusBtn'),
        delbutton: $('#minusBtn')
    })

    var controller = new ListController(model, view);

    view.show();
})
