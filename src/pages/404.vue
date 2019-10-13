<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-4xl font-bold mb-16">
        Sorry, nothing but a blank
        <s>canvas</s> page here.
      </h2>
      <g-link to="/">
        <button
          role="button"
          class="block bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3 mb-4"
        >Back to Home</button>
      </g-link>
      <g-image src="../../static/undraw_blank_canvas.svg" alt="Woman looking at a blank canvas." />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Page Not Found"
  }
};
</script>

