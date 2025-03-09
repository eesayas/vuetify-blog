const message = ref<string>("");
const open = ref<boolean>(false);

const proceed = ref((value: unknown) => {});
const cancel = ref(() => {});

export const useConfirm = () => {
  const confirm = (msg: string) => {
    const promise = new Promise((resolve, reject) => {
      open.value = true;
      message.value = msg;
      proceed.value = resolve;
      cancel.value = reject;
    });

    return promise.then(
      () => {
        open.value = false;
        return true;
      },
      () => {
        open.value = false;
        return false;
      }
    );
  };

  return {
    confirm,

    // Used exclusively by ConfirmDialog
    proceed,
    cancel,
    open,
    message,
  };
};
