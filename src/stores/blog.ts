export interface Blog {
  title: string;
  text: string;
  author: string;
  date: Date;
}

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref<Blog[]>([]);

  const fetchBlogs = () => {
    blogs.value = [
      {
        title: "131 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "3123 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "12312 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "Fi213123rst blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "3123 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "3123 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "123123 blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "Firs3123t blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
      {
        title: "4de blog",
        text: "This is the first blog",
        author: "John Doe",
        date: new Date(),
      },
    ];
  };

  return {
    blogs,
    fetchBlogs,
  };
});
