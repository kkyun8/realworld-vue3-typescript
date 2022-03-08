export default (isLoading: boolean): Promise<string> | void => {
  const loading = document.body.querySelector("#loader");

  if ((isLoading && loading) || (!isLoading && !loading)) return;
  return new Promise((resolve) => {
    if (isLoading) {
      const loader = document.createElement("div");
      loader.id = "loader";
      loader.className = "modal-backdrop show in";
      loader.style.backgroundColor = "#0000007a";

      const spinner = document.createElement("div");
      spinner.className = "loader";
      loader.appendChild(spinner);

      document.body.appendChild(loader);
    } else {
      loading?.remove();
    }
    resolve("");
  });
};
