(function () {
    function ToDo() {
        var storage = new Storage(),
            model = new Model(storage),
            template = new Template(),
            view = new View(model, template),
            controller = new Controller(model, view);

        view.init();
        controller.init();

        return controller;
    }

    function Item(text) {
        this.id = Math.round(new Date().getTime() * Math.random());
        this.isComplete = false;
        this.text = text;

    }

    // Data storage
    function Model(storage) {
        var dictionary = storage.load() || {};

        this.get = function (itemId) {
            return dictionary[itemId];
        };
        this.add = function (item) {
            dictionary[item.id] = item;
            this.store();
        };
        this.getAll = function () {
            return dictionary;
        };
        this.store = function () {
            storage.store(dictionary);
        };
        this.remove = function (taskId) {
            delete  dictionary[taskId];
            this.store();
        }
    }

    function View(model, template) {
        var container,
            todoList,
            todoInput,
            todoSubmit;
        this.init = function () {
            container = document.createElement('div');
            container.className = 'todo';

            todoList = document.createElement('div');
            todoList.className = 'todo__list';

            todoInput = document.createElement('input');
            todoInput.className = 'todo__input';
            todoInput.placeholder = 'some';

            todoSubmit = document.createElement('button');
            todoSubmit.className = 'todo__submit';
            todoSubmit.textContent = "Add new task";

            container.appendChild(todoList);
            container.appendChild(todoInput);
            container.appendChild(todoSubmit);

            document.body.appendChild(container);
        };

        this.getSubmitButton = function () {
            return todoSubmit;
        };

        this.getInput = function () {
            return todoInput;
        };

        this.getList = function () {
            return todoList;
        };

        this.render = function () {
            var html = '';
            var tasks = model.getAll();
            for (var taskId in tasks) {
                html += template.render(tasks[taskId]);
            }
            todoList.innerHTML = html;
        };
    }

    function Controller(model, view) {
        this.init = function () {
            view.render();
            view.getSubmitButton().addEventListener('click', function () {
                var input = view.getInput(),
                    todoText = input.value;
                if (todoText) {
                    var newItem = new Item(todoText);
                    model.add(newItem);
                    input.value = '';
                    input.focus();
                    view.render();
                }
            });
            view.getList().addEventListener('change', function (e) {
                var input = e.target,
                    taskId = input.parentNode.dataset.id;
                switch (input.type) {
                    case 'checkbox' :
                        model.get(taskId).isComplete = input.checked;
                        break;
                    case 'text' :
                        model.get(taskId).text = input.value;
                        break;
                }
                model.store();
            });

            view.getList().addEventListener('click', function (e) {
                if (e.target.type !== 'button') return;
                var input = e.target,
                    taskId = input.parentNode.dataset.id;
                model.remove(taskId);
                input.parentNode.remove();
            })
        };
    }

    function Template() {
        this.render = function (item) {
            return '<label class="todo__list-item" data-id="' + item.id + '">' +
                '<input class="todo__list-item-checkbox" type="checkbox" ' + (item.isComplete ? 'checked' : '' ) + '>' +
                '<input class="todo__list-item-text" type="text" value="' + item.text + '">' +
                '<input class="todo__list-remove" type="button" value="x">' +
                '</label>';
        }
    }

    function Storage() {
        this.store = function (dictionary) {
            localStorage.setItem('dictionary', JSON.stringify(dictionary));
        };
        this.load = function () {
            return JSON.parse(localStorage.getItem('dictionary'));
        };
    }

    window.ToDo = ToDo;
})();
