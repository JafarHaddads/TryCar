<template>
  <div class="post-box">
    <h4 class="post-title">{{ post.title }}</h4>
    <div class="row">
      <div class="col-md-12">
        <img class="post-image" :src="srcImage" @error="imgDefault" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <span class="post-username">{{ post.userName }}</span>
      </div>
      <div class="col-md-12">
        <span class="post-phone">{{ post.userPhone }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  data() {
    return {
      image: null,
    };
  },
  computed: {
    srcImage() {
      return `${this.$endpoints.GetImageByID}${this.post.id}`;
    },
  },
  methods: {
    imgDefault(e) {
      e.target.src = "./images/no_image_available.jpg";
    },
  },
};
</script>
<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border-radius: 15px;

  .post-title {
    font-weight: 600;
    color: #553192;
  }
  .post-image {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .post-username,
  .post-phone {
    font-weight: 600;
  }
  .post-username {
    color: #62718d;
  }
  .post-phone {
    color: #f1bb53;
  }
}
.post-box:hover {
  box-shadow: 0 0 20px rgb(172, 172, 172);
}
</style>
