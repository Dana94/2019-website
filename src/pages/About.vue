<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-4xl font-bold mb-16">About Me</h2>
      <div>
        <g-image
          src="../../static/me.jpg"
          alt="Picture of me."
          class="w-48 h-48 rounded-full mb-8 lg:mb-0"
        />
        <p>I'm Dana Ottaviani, a front-end developer.</p>
        <br />
        <p>
          I went into my undergrad as undecided. I entered college with an interest
          in math and signed up for a B.A. in Mathematics. One of the requirements was an
          intro to programming class. I enjoyed learning what coding actually entails.
          It led me to signing up for more courses (web development, Bioinformatics, Data
          Structures, please check out the
          <a
            href="https://www.linkedin.com/in/danaottaviani/"
          >
            full list in my
            LinkedIn profile
          </a> if you’re interested), which gave me the idea of applying for a
          minor in Computer Science, but that eventually led to a B.S. in the area since both
          Mathematics and C.S. had some class requirement overlap.
        </p>
        <br />
        <p>
          I enjoy working in the front-end side of web development since it’s really the first thing a user sees.
          But I have constant curiosity in AWS, back-end, devops, I don’t want these areas to be a black box to me.
          I want at least a high-level understanding of these processes to expand my technical knowledge to be a more well-rounded developer.
        </p>
        <br />
        <p>
          I finally decided to get around having a clean, new site to showcase what I know so far and even a
          <g-link to="/blog">blog</g-link> to document what I learn on my own.
        </p>
        <br />
        <p>Aside from programming, I enjoy learning about Blender and improving my drawing skills.</p>
        <br />
        <p>I have also embraced open source and constanty keep an eye out for programs and repos I can use and contribute to.</p>
        <br />
        <p>
          I've been awarded among
          <a
            href="https://www.freecodecamp.org/news/fcc100-top-contributors-2019/"
            target="_blank"
            rel="noopener noreferrer"
          >Top 100 Open Source Contributors</a> by freeCodeCamp.org in 2019.
        </p>
      </div>
      <div>
        <h3 class="text-2xl">Currently Using:</h3>
        <hr />
        <ul>
          <li>Operating System: Windows 10</li>
          <li>
            Editor:
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Visual Studio Code</a>
          </li>
          <li>
            Git Client:
            <a
              href="https://www.gitkraken.com/git-client"
              target="_blank"
              rel="noopener noreferrer"
            >GitKraken</a>
          </li>
          <li>
            Static Site Generator:
            <a
              href="https://gridsome.org/"
              target="_blank"
              rel="noopener noreferrer"
            >Gridsome</a>
          </li>
          <li>
            Hosting:
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>
          </li>
        </ul>
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
h3 {
  margin-top: 3rem;
}
hr {
  height: 1px;
  background-color: black;
}
ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-top: 1rem;
}

img {
  margin: 0 auto;
  margin-bottom: 2rem;
}
@media screen and (min-width: 425px) {
  img {
    float: left;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
}
</style>


