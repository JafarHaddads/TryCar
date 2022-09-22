// plugins apiEndpoints
export default {
  install(app) {
    const baseUrl = `https://mockend.com/JafarHaddads/tryCar`;

    const endpoints = {
      GetPosts: `${baseUrl}/posts`,
      GetImageByID: `https://picsum.photos/600/300/?image=`,
    };

    app.config.globalProperties.$endpoints = endpoints;
  },
};
