<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-4xl font-bold mb-16">About Me</h2>
      <div>
        <g-image
          src="../../static/me.jpg"
          alt="avatar"
          class="w-48 h-48 rounded-full mb-8 lg:mb-0"
        />
        <div>I'm Dana Ottaviani, a front-end developer...</div>
        <div>I was first intoduced to programming in my undergrad which lead me to graduating with a Computer Science degree (and Mathematics too).
          I enjoy working in the front-end side of web development but constantly try to expand my knowledge of the back-end too.
      
        </div>
        <div>I finally decided to get around having a clean, new site to showcase what I know so far and even a blog to document what I learn on my own.</div>
        <div>Aside from programming, I enjoy learning about Blender and improving my drawing skills in traditional and digital formats.</div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

<style scoped>
img {
  float: left;
  margin-bottom: 1rem;
  margin-right: 2rem;
}
</style>


