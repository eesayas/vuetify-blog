import type { PiniaPluginContext } from "pinia";

const key = "VUETIFY_BLOG_ISAIAS";

export const PersistStorage = (context: PiniaPluginContext) => {
  const data = localStorage.getItem(key);
  console.log("sup");

  if (data) {
    context.store.$patch(JSON.parse(data));
  }

  context.store.$subscribe(
    (_, state) => {
      localStorage.setItem(key, JSON.stringify(state));
    },
    { detached: true, flush: "sync" }
  );
};
