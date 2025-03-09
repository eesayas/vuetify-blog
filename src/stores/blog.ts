export interface Blog {
  title: string;
  text: string;
  author: string;
  date: Date;
}

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref<Blog[]>([]);

  const create = (blog: Blog) => {
    blogs.value.unshift(blog);
  };

  return {
    blogs,
    create,
  };
});
