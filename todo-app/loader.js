export const loader = () => {
  const loader = document.createElement("span");
  const wrapper = document.createElement("div");
  loader.classList.add("spinner-border", "text-primary");
  wrapper.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "my-5"
  );
  wrapper.append(loader);
  return wrapper;
};
