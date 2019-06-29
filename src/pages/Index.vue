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
          <!-- <li class="checkmark mb-6">
            <div>Project Two</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Three</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Four</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>-->
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <!-- <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle"></use>
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/avatar.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>

       
      </div>
    </div>-->

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle"></use>
            </svg>
          </div>

          <p class="mb-12">
            Static sites cannot submit forms on their own. However, services like
            <a
              href="https://www.netlify.com/docs/form-handling"
            >Netlify Forms</a> or
            <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.
          </p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
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

    <!-- <div class="newsletter bg-background-tertiary">
      <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
        <h2 class="text-2xl font-bold mb-8">Join my Newsletter</h2>

        <div class="w-4/5 mx-auto mb-8">
          <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.</p>

          <form action="#">
            <div class="flex flex-col sm:flex-row">
              <input type="email" name="email" placeholder="Your email address" class="flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-primary sm:border-r-0 shadow outline-none focus:border-green-700 z-10" required>
              <button data-element="submit" class="flex-2 w-40 uppercase bg-green-700 text-white rounded sm:rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-green-800 focus:bg-green-800 z-10 w-full sm:w-auto mt-4 sm:mt-0">
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>-->
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

