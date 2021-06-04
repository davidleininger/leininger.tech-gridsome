<template>
  <Layout>

    <section class="flex items-center relative z-10 w-full max-w-5xl mx-auto">
    <div class="multiline flex flex-col justify-center items-start">
      <h1 class="text-5xl text-black dark:text-white font-bold font-mono">I'm David <div class="say-my-name relative">Leininger</div>.</h1>
      <h2 class="text-3xl">I design and build things for the internets.</h2>
      <h3 class="text-lg">I like learning and <span class="strike">sometimes</span> hardly ever write about it.</h3>
      <p class="text-xs">This is some small text.</p>
    </div>
    <div class="w-1/2 lg:w-1/3 absolute right-0 -z-1 overflow-hidden">
      <img src="images/dl-ldott.jpg" class="w-full h-full" alt="headshot.">
      <div class="h-1 bg-teal w-full absolute bottom-0" />
    </div>
  </section>
  <section class="flex justify-center">
    Here is where I'll put recent posts...
  </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'leininger.tech'
  }
}
</script>

<style>
.say-my-name{
  display: inline-block;
  animation: goodLuck 0.2s;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  backface-visibility: hidden;
}
.say-my-name:hover{
  animation: sayMyName 0.2s;
  color: transparent;
  cursor: help;
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
.say-my-name:hover::after {
  opacity: 1;
  display: inline-block;
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
