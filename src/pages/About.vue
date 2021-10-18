<template>
  <Layout class="two-col">
    <section class="flex flex-col md:flex-row items-start">
      <div class="w-full md:w-3/5 lg:w-2/3 mb-4 md:pr-8 lg:pr-12">
        <h1 class="text-black dark:text-white text-5xl font-mono mb-2 md:pr-4">About Me</h1>
        <h2 class="text-3xl text-teal-dark dark:text-teal font-mono">David Leininger</h2>
        <p>
          I like to consider myself a professional nerd. My brain is constantly torn between creativity and logic. I love finding examples of good UI and will dev-splain how to fix bad UI to anyone within earshot.
        </p>

        <p>
          I am a <span class="strike">Senior Developer</span> Manager at <a href="https://wwt.com">World Wide Technology</a>, where I help design and build websites and apps. When I'm not at work, I volunteer with the live streaming at church, and I help run production at several Catholic youth conferences around the country. I live in St. Louis with my amazing wife and <span class="strike">daughter</span>&nbsp;<span class="strike">two</span> three daughters. They are all too good for me, but slum it with me because I’m funny and an average cook. #girdad
        </p>

        <h2 class="text-2xl mt-8 text-teal-dark dark:text-teal font-mono">
          Extra Credit:
        </h2>
        <p>
          I am a diehard Blues fan, LFC fan, and recently became a St Louis City SC fan. I could spend hours talking about the merits of pizza. I believe that breakfast food is the best kind of food. I don’t drink coffee, but I love coffee shops. I like good bourbon. I have a lot of tattoos. I like building things with power tools. I've been to 49 states – here's looking at you Alaska.
        </p>
      </div>
      <g-image class="w-full md:w-2/5 lg:w-1/3 mb-6" src="~/assets/images/rad-fam.jpg" alt=".My family"/>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'about me'
  }
}
</script>
