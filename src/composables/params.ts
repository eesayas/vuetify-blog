// Must be only used within setup
// Will be used to get blog slug id to fetch data
export const useParams = (key: string) =>
  computed(() => {
    const route = useRoute();
    const params = route.params as Record<string, string>;

    return params[key];
  });
