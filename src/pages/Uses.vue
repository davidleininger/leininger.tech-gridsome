<template>
  <Layout class="content-grid">
    <article>
      <h1 class="text-black dark:text-white text-5xl font-mono mb-2">Uses</h1>
      <p>Just like everyone else, this was inspired by <a href="https://wesbos.com/uses">Wes Bos</a>. These are things I use on a daily basis that make my life better, easier, or opinionated. You probably don’t really care, but I bet I’ve got a trick or two you don’t know about...</p>
      <h2>Dev Stuff</h2>
      <h3>VS Code</h3>
      <p>VS Code is the editor where I sling code. I’ve been a pretty big from since... a while now. I liked VS Code before, but I like it so much more after going through Caleb Porzio’s Make VS Code Awesome course.</p>
      <h3>Hyper</h3>
      <p>Hyper is my go to terminal when I’m not inside of VS Code. Usually, I just use hyper to start up new projects and then pop into VS Code.</p>
      <h3>Cobalt Next</h3>
      <p>I built for prertty much everything: VS Code, Hyper, Alfred, Insomnia, and this site.</p>
      <h3>Operator Mono</h3>
      <p>Yes, I spent $200 on a font for coding. I stare at it every day, and as a designer and type nerd I can honestly say it’s been more than worth it.</p>
      <h3>Dotfiles</h3>
      <p>Files with dots in front that tell my computer what to do and look like. I stole fair and square from a bunch of different people to make these what I wanted. It’s not perfect, but it works for me.</p>

      <h2>Appy Things</h2>
      <h3>Figma</h3>
      <p>Figma is my go to tool for UI design. I can’t imagine another tool hitting the marks that this one does. For color work it’s a wonderful tool, but if you’re on a design team, it’s a must have. </p>

      <h3>Illustrator (Adobe) </h3>
      <p>Long live Adobe... Still the best tool for branding design. Period.</p>

      <h3>Alfred</h3>
      <p>Probably one of the first things I do when I get a new machine is install Alfred. I know that Spotlight isgood, but it’s not good enough. Plus... workflows. </p>

      <h3>Things </h3>
      <p>Getting Things Done - Mostly. I use so many differnt ways of tracking work between family, work, and myself.Things is where I keep my things, but there are a lot of other places where todo items live. </p>

      <h3>aText</h3>
      <p>TextExpander was too expensive. This is basically the same thing. All my dev snippets regarless of editor (even codepen).</p>

      <h3>Contrast </h3>
      <p>Checking color contrast ratios from the menubar. Easy peasy.</p>

      <h3>Frank DeLoupe </h3>
      <p>Use a shortcut, get a color picker for anywhere on your monitor. Simple tool that I use everyday.</p>

      <h3>Bartender</h3>
      <p>Too many menubar apps, so little time. It’s like a Tardis for your menubar. If you understand that, we can be friends. If not, there’s still a chance we can be friends, but you’ve already got one strike.</p>

      <h3>Umbra </h3>
      <p>Switching system color modes with keyboard shortcut. It’s like a dang superpower.</p>

      <h3>Magnet </h3>
      <p>The window snapping that Mac wishes it shipped with. If I didn’t pay for it, I’d use Rectangle.</p>

      <h3>Kap</h3>
      <p>Quickly grab screen captures and export to .gif or .mp4.</p>

      <h3>Notion </h3>
      <p>All my notes and writing is done here first. It’s just the way it goes right now.</p>

      <h3>1Password </h3>
      <p>Swapped from LastPass because their UI was bad. Everyone needs a password manager.</p>

      <h3>Hey </h3>
      <p>My current life goal is to completely get off of Google. Hey, while not perfect, is a good first step.</p>

      <h3>Insomnia </h3>
      <p>REST Client for testing API calls.</p>

      <h2>Working Furniture</h2>
      <h3>Autonmyous Frame</h3>
      <p>Sittings the new smoking, right? I try not to sit all day, and I was looking for a good set of legs. Now, I stand on that great set of legs at my standing desk with Autonmyous legs.</p>

      <h3>Handmade Red Oak Desktop</h3>
      <p>To be fair, I used power tools. My hands can't cut and glue wood, but I still made the darn thing. I'll probably make another thicker version soon.</p>

      <h3>Steelcase Leap V1</h3>
      <p>When we started working remote at the begining of Covid, I knew I needed a better chair. This is a better chair. Oh and I swapped out those wheels for roller blade wheels, and I'm never going back.</p>

      <h3>Keychron C1</h3>
      <p>Recently jumped on the mecahnical keyboard game. We'll see how my likely new hobby is about to go, but it's fun so far. Let's get to modding.</p>

      <h2>Bonus Crap</h2>
      <h3>Airpods Pro</h3>
      <p>So I can read ALL the audio books. They are good for meetings, too.</p>

      <h3>Timbuk2 Bags</h3>
      <p>These bags are the only bags I'll ever use. I've used them for the past 14 years, and they are the best dang bags. In all those years, only one thing ever took one down. Got a bullet caught in the bag when I was shot from a rogue celebratory New Years Eve shot in an airport parking lot. Ask me about it. It's a pretty great story.</p>
    </article>
  </Layout>
</template>

<script>
export default {
  name: 'Uses-Page',
  metaInfo: {
    title: 'Uses'
  }
}
</script>

<style lang="scss" scoped>
h3 {
  color: var(--primary);
  font-size: 1.15rem;
  font-family: theme('fontFamily.mono');
  margin-top: 0.5rem;
}
p {
  margin-top: 0;
}
</style>
