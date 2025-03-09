export interface Blog {
  title: string;
  text: string;
  author: string;
  date?: Date;
  slug: string;
}

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref<Blog[]>([]);

  // CREATE
  const create = (blog: Blog) => {
    blogs.value.unshift(blog);
  };

  // READ
  const blog = computed(
    () => (slug: string) => blogs.value.find((blog) => blog.slug == slug)
  );

  // DELETE
  const remove = (slug: string) => {
    blogs.value = blogs.value.filter((blog) => blog.slug !== slug);
  };

  // UPDATE
  const update = (slug: string, data: Blog) => {
    blogs.value = blogs.value.map((blog) => (blog.slug === slug ? data : blog));
  };

  return {
    blogs,
    blog,
    create,
    remove,
    update,
  };
});
