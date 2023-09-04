export function getTodoList(owner) {
  let localItemList = JSON.parse(localStorage.getItem(owner));
  return localItemList.todoItem;
}

export function createTodoItem(owner) {
  let localItemId = !JSON.parse(localStorage.getItem(owner)).todoItem.length ? 0 : JSON.parse(localStorage.getItem(owner)).todoItem[JSON.parse(localStorage.getItem(owner)).todoItem.length - 1].id;

  return function({ owner, name }) {
    let localItemList = JSON.parse(localStorage.getItem(owner));
    let localItem = {
      owner,
      name,
      done: false,
      id: ++localItemId,
    };

    localItemList.todoItem.push(localItem);
    localStorage.setItem(owner, JSON.stringify(localItemList));

    return localItem;
  }
}

export function switchTodoItemDone({todoItem}) {
  let localItemList = JSON.parse(localStorage.getItem(todoItem.owner));
  let result = localItemList.todoItem.find(item => item.id === todoItem.id);
  todoItem.done = !todoItem.done;
  result.done = todoItem.done;
  localStorage.setItem(todoItem.owner, JSON.stringify(localItemList));
}

export function deleteTodoItem({ element, todoItem }) {
  if (!confirm('Вы уверены?')) {
		return;
	}
  element.remove();

  let localItemList = JSON.parse(localStorage.getItem(todoItem.owner));
  let itemIndex = localItemList.todoItem.indexOf(localItemList.todoItem.find(item => item.id === todoItem.id));
  localItemList.todoItem.splice(itemIndex, 1);
  localStorage.setItem(todoItem.owner, JSON.stringify(localItemList));
}
