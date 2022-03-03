export default async (title: string, body: string, isConfrim = false) => {
  return new Promise<string>((resolve, reject) => {
    modalElement(resolve, reject, { title, body, isConfrim });
  });
};

const modalElement = (
  resolve: (value: string | PromiseLike<string>) => void,
  reject: (value: string | PromiseLike<string>) => void,
  setting: { title: string; body: string; isConfrim: boolean }
) => {
  const modalOpen = document.createElement("div");
  modalOpen.className = "modal-open";

  const closeModal = () => document.body.removeChild(modalOpen);

  const closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.addEventListener("click", () => {
    reject("close");
    closeModal();
  });

  const cancelButton = document.createElement("button");
  cancelButton.className = "btn btn-danger";
  cancelButton.style.marginRight = "5px";
  cancelButton.textContent = "CANCEL";
  cancelButton.addEventListener("click", () => {
    reject("close");
    closeModal();
  });

  const okButton = document.createElement("button");
  okButton.className = "btn btn-primary";
  okButton.textContent = "OK";
  okButton.addEventListener("click", () => {
    resolve("close");
    closeModal();
  });

  const title = document.createElement("h4");
  title.className = "modal-title";
  title.textContent = setting.title;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = "block";

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog";

  const modalContent = document.createElement("div");
  modalDialog.className = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.appendChild(closeButton);
  modalHeader.appendChild(title);

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  modalBody.textContent = setting.body;

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";
  if (setting.isConfrim) {
    modalFooter.appendChild(cancelButton);
  }

  modalFooter.appendChild(okButton);

  const modalBackdrop = document.createElement("div");
  modalBackdrop.className = "modal-backdrop show in";
  modalBackdrop.style.display = "block";

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);

  modal.appendChild(modalDialog);

  modalOpen.appendChild(modal);
  modalOpen.appendChild(modalBackdrop);

  document.body.appendChild(modalOpen);
};
