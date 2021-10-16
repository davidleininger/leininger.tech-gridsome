<template>
  <Layout class="landing">
    <section class="flex items-center isolate w-full mt-12 sm:mt-32 mb-12 max-w-5xl mx-auto">
    <div class="flex flex-col justify-center w-full">
      <h1 class="text-4xl sm:text-5xl text-black dark:text-white font-bold font-mono mb-4">Hello, I'm <div class="look-at-me relative mr-8">David</div><div class="say-my-name relative" tabindex="0">Leininger</div>.</h1>
      <h2 class="text-2xl sm:text-3xl mt-2 md:mt-0 mb-4 dark:text-grey-dark">I design and build things for the internets.</h2>
      <h3 class="text-md sm:text-lg mt-1 md:mt-0 mb-4 dark:text-grey-dark">I like learning and <span class="strike">sometimes</span> hardly ever write about it.</h3>
      <p class="text-xxs sm:ext-xs my-0 dark:text-grey-dark">This is some small text.</p>
    </div>
  </section>
  <section class="flex flex-col sm:flex-row gap-6 border-t border-teal pt-8">
    <div class="flex-1">
      <h3 class="text-2xl text-teal-dark dark:text-teal font-mono">Somewhat Recent Writings</h3>
      <p>TODO: List 3 things and then see all link</p>
    </div>
    <div class="flex-1">
      <h3 class="text-2xl text-teal-dark dark:text-teal font-mono">Featured Work</h3>
    </div>
  </section>

  </Layout>
</template>

<script>
export default {
}
</script>

<style>
.look-at-me{
  display: inline-block;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}
.say-my-name{
  display: inline-block;
  animation: goodLuck 0.2s;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}
.say-my-name:hover, .say-my-name:focus{
  animation: sayMyName 0.2s;
  color: transparent;
  cursor: help;
  outline: none;
}
.say-my-name::after {
  color: var(--primary);
  content: 'Lining-er';
  left: 0;
  display: inline-block;
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s;
}
.say-my-name:hover::after, .say-my-name:focus::after {
  opacity: 1;
  display: inline-block;
}
.say-my-name:focus::after {
  text-decoration: underline wavy var(--accent);
}
@keyframes sayMyName {
  from { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  20% { transform: skewX(12deg) skewY(1deg); color: var(--accent-dark); }
  40% { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  60% { transform: skewX(12deg) skewY(1deg); color: var(--accent);  }
  80% { transform: skewX(-12deg) skewY(-1deg); color: var(--accent-dark); }
  to { transform: skewX(0deg) skewY(0deg); color: theme('colors.transparent'); }
}
@keyframes goodLuck {
  from { transform: skewX(-12deg) skewY(-1deg); color: var(--accent-dark); }
  20% { transform: skewX(12deg) skewY(1deg); color: var(--accent); }
  40% { transform: skewX(-12deg) skewY(-1deg); color: var(--primary); }
  60% { transform: skewX(12deg) skewY(1deg); color: var(--accent-dark);  }
  80% { transform: skewX(-12deg) skewY(-1deg); color: var(--accent); }
  to { transform: skewX(0deg) skewY(0deg); color: var(--base); }
}
</style>
