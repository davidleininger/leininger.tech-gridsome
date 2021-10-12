<template>
  <Layout>
    <h1 class="text-black dark:text-white text-5xl font-mono mb-2">Contact</h1>
    <p>Got a question for me? Want to work with me? Want to tell me a joke?</p>
    <form
      v-if="!successfulSend"
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div class="sender-info">
        <div>
          <label for="name" class="label">Name</label>
          <input type="text" name="name" placeholder="What your mom calls you..." v-model="formData.name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="you@probablygmail.com" v-model="formData.email" />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea name="message" placeholder="Words written by you that I’ll read..." v-model="formData.message"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
    <div v-else>
      <h2>Thanks for reaching out</h2>
      <p>I'll try to get back to you as soon as possible. In the mean time, here's my favorite <a href="https://www.youtube.com/watch?v=APQ09eK99GA">14 second youtube video</a>. Enojy.</p>
      <base-button @button-clicked="resetForm" class="mt-4">Say More</base-button>
    </div>
  </Layout>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'Contact',
  components: {
    BaseButton
  },
  metaInfo: {
    title: 'Contact'
  },
  data() {
    return {
      formData: {},
      successfulSend: false,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.successfulSend = true)
      .catch(error => alert(error))
    },
    resetForm() {
      this.formData = {}
      this.successfulSend = false
    }
  }
}
</script>
