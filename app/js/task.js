Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({},{sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      event.preventDefault();

      var text = event.target.text.value;

      if(text.trim().length > 0) {
        Tasks.insert({
          text: text,
          createdAt: new Date()
        });

        //Limpiar el campo de texto
        event.target.text.value = "";
      }
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
