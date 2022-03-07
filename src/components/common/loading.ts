export default (): void => {
  const loading = document.body.querySelector("#loader");

  if (loading) {
    loading.remove();
  } else {
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.className = "modal-backdrop show in";

    const spinner = document.createElement("div");
    spinner.className = "loader";
    loader.appendChild(spinner);

    document.body.appendChild(loader);
  }
};
