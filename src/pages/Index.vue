<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full text-center sm:text-left">
        <div class="leading-tight">Hi, I'm Dana.</div>
        <div
          class="text-copy-leadpurple leading-tight"
        >A software developer who enjoys puzzles and embracing the creative side in my work.</div>
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 mx-auto">
          <g-image src="../../static/undraw_programmer_imem.svg" alt="programmer"/>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle"></use>
          </svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>Lights Puzzle</div>
            <div
              class="text-lg text-gray-600"
            >A 3x3 grid puzzle where you have to light up all the squares to win the game.</div>
            <div class="text-lg text-gray-600">Made with VueJS.</div>
            <div class="text-lg text-gray-600">
              <a
                href="https://github.com/Dana94/lights-puzzle"
                target="_blank"
                class="text-copy-leadpurple"
              >Source</a>
              &nbsp;
              <a
                href="https://kind-kilby-d6c11a.netlify.com/"
                target="_blank"
                class="text-copy-leadpurple"
              >Live</a>
            </div>
          </li>
           <li class="checkmark mb-6">
            <div>Random Quote Machine</div>
            <div
              class="text-lg text-gray-600"
            >The user can view different quotes and have the ability to post them on Twitter.</div>
            <div class="text-lg text-gray-600">Made with HTML5, CSS, JavaScript.</div>
            <div class="text-lg text-gray-600">
              <a
                href="https://github.com/Dana94/random-quote-machine"
                target="_blank"
                class="text-copy-leadpurple"
              >Source</a>
              &nbsp;
              <a
                href="https://dana94.github.io/random-quote-machine/"
                target="_blank"
                class="text-copy-leadpurple"
              >Live</a>
            </div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>
    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle"></use>
            </svg>
          </div>

          <!-- <p class="mb-12">
            Static sites cannot submit forms on their own. However, services like
            <a
              href="https://www.netlify.com/docs/form-handling"
            >Netlify Forms</a> or
            <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.
          </p> -->

          <div class="text-lg sm:text-lg mb-16">
            <form class="mb-12" name="contact" method="POST" action="https://formspree.io/dana.ottaviani@gmail.com">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Dana Scully"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-purple-700 mb-2 p-4"
                    required
                  >
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-purple-700 mb-2 p-4"
                    required
                  >
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-purple-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

