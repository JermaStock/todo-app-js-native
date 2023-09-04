// создаём и возвращаем заголовок приложения
function createAppTitle(title) {
	const appTitle = document.createElement('h2');
	appTitle.innerHTML = title;
	return appTitle;
}

// создаём и возвращаем форму для создания дела
function createTodoItemForm() {
	const form = document.createElement('form');
	const input = document.createElement('input');
	const buttonWrapper = document.createElement('div');
	const button = document.createElement('button');

	form.classList.add('input-group', 'mb-3');
	input.classList.add('form-control');
	input.placeholder = 'Введите название нового дела';
	buttonWrapper.classList.add('input-group-append');
	button.classList.add('btn', 'btn-primary');
	button.textContent = 'Добавить дело';

	buttonWrapper.append(button);
	form.append(input);
	form.append(buttonWrapper);

	return {
		form,
		input,
		button,
	};
}

// создаём и возвращаем список элементов
function createTodoList() {
	const list = document.createElement('ul');
	list.classList.add('list-group');
	return list;
}

function createTodoItemElement(todoItem, {onDone, onDelete}) {
	const doneClass = 'list-group-item-success';

	const item = document.createElement('li');
	// кнопки помещаем в элемент, который красиво покажет из в одной группе
	const buttonGroup = document.createElement('div');
	const doneButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	// устанавливем стили для элементво спика, а также для размещения кнопок
	// в его правой части с помощью flex
	item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
	if (todoItem.done) {
		item.classList.add(doneClass);
	}
	item.textContent = todoItem.name;

	buttonGroup.classList.add('btn-group', 'btn-group-sm');
	doneButton.classList.add('btn', 'btn-success');
	doneButton.textContent = 'Готово';
	deleteButton.classList.add('btn', 'btn-danger');
	deleteButton.textContent = 'Удалить';

	// добавляем обработчики на кнопки
	doneButton.addEventListener('click', () => {
		onDone({todoItem, element: item});
		item.classList.toggle(doneClass, todoItem.done);
	});
	deleteButton.addEventListener('click', () => {
		onDelete({todoItem, element: item});
	});

	// вкладываем кнопки в отдельный элемент, чтобы они объеденились в один блок
	buttonGroup.append(doneButton);
	buttonGroup.append(deleteButton);
	item.append(buttonGroup);

	return item;
}

async function createTodoApp(container, {
		title,
		owner,
		todoItemList = [],
		onCreateFormSubmit,
		onDoneClick,
		onDeleteClick,
	}) {
	const todoAppTitle = createAppTitle(title);
	const todoItemForm = createTodoItemForm();
	const todoList = createTodoList();
	const handlers = { onDone: onDoneClick, onDelete: onDeleteClick };

	container.append(todoAppTitle);
	container.append(todoItemForm.form);
	container.append(todoList);

	todoItemList.forEach(todoItem => {
		const todoItemElement = createTodoItemElement(todoItem, handlers);
		todoList.append(todoItemElement);
	})

	// браузер создаёт событие submit на форме по нажатию Enter или на кнопку создания дела
	todoItemForm.form.addEventListener('submit', async  e => {
		// эта строчка необходима, чтобы предотвратить стандартной действие браузера
		// в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
		e.preventDefault();

		// игнорируем создание элемента, если пользователь ничего не ввёл в поле
		if (!todoItemForm.input.value) {
			return;
		}

		const todoItem = await onCreateFormSubmit({
			owner,
			name: todoItemForm.input.value.trim(),
		});

		const todoItemElement = createTodoItemElement(todoItem, handlers);

		// создаём и добавляем в список новое дело с названием из поля для ввода
		todoList.append(todoItemElement);

		// обнуляем значения в поле, чтобы не пришлось стирать его вручную
		todoItemForm.input.value = '';
	});
}

export { createTodoApp };
