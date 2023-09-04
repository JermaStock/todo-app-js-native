export function createSwitchStorageButton(owner) {
  const wrapper = document.createElement('div');
  const title = document.createElement('p');
  const button = document.createElement('button');

  if (!localStorage.getItem(owner)) {
    localStorage.setItem(
      owner,
      JSON.stringify({
        isStorageLocal: true,
        todoItem: [],
      },)
      );
  }

  button.type = 'button';
  button.classList.add('btn', 'btn-primary', 'btn-l', 'mb-1');
  title.classList.add('lead');
  wrapper.classList.add('mb-3');

  title.innerHTML = `Текущее хранилище: ${JSON.parse(localStorage.getItem(owner)).isStorageLocal ? 'Локальное' : 'Серверное'}`;
  button.innerHTML = JSON.parse(localStorage.getItem(owner)).isStorageLocal ? 'Перейти на серверное хранилище' : 'Перейти на локальное хранилище';

  button.addEventListener('click', function () {
    let storageState = JSON.parse(localStorage.getItem(owner));
    localStorage.setItem(
      owner,
      JSON.stringify(
        { isStorageLocal: storageState.isStorageLocal = !storageState.isStorageLocal,
          todoItem: storageState.todoItem,
        }
    ));
    document.location.reload();
  })

  wrapper.append(button);
  wrapper.append(title);

  return wrapper;
}
