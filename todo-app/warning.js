export const warning = () => {
  const item = document.createElement("div");
  const link = document.createElement("a");
  item.classList.add('text-danger', 'h3', 'my-5');
  link.href = 'https://github.com/JermaStock/todo-app-js-native';
  item.innerHTML = `В данной версии приложения, работает только тип хранилища "локальное", для работы с сервером, необходимо следовать инструкции в `;
  link.textContent = 'репозитории';
  item.append(link)
  return item;
}
