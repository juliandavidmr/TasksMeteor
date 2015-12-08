#TasksMeteor
Gestor de tareas personales

##Añadir datos a Mongo
$ meteor mongo
$ db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
