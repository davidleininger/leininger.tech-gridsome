<template>
  <Layout class="content-grid">
    <article>
      <h1 class="text-black dark:text-white text-5xl font-mono mb-2">Contact</h1>
      <p>Got a question for me? Want to work with me? Want to tell me a joke?</p>
      <form
        v-if="!successfulSend"
        name="contact"
        method="post"
        autocomplete="on"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="flex flex-col gap-6 mt-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div class="flex flex-col sm:flex-row gap-6 sender-info">
          <BaseInput
            v-model="formData.name"
            error="I need to know who you are..."
            :has-errors="formData.name === ''"
            label="Name"
            type="text"
            name="name"
            placeholder="What your mom calls you..."
            :required="true"
            class="flex-1"
          />
          <BaseInput
            v-model="formData.email"
            error="How else will I reply to you..."
            :has-errors="formData.email === ''"
            label="Email"
            type="email"
            name="email"
            placeholder="you@probablygmail.com"
            :required="true"
            class="flex-1"
          />
        </div>
        <div class="message-wrapper flex">
          <base-textarea
            v-model="formData.message"
            error="Well, you gotta write something..."
            :has-errors="formData.message === ''"
            label="Message"
            name="message"
            placeholder="Words written by you that I’ll read"
            :required="true"
            class="flex-1"
          />
        </div>
        <p v-if="formError && !formEmpty" class="text-red dark:text-red-light">Listen, you gotta fill this thing out if you're you want to submit it...</p>
        <base-button type="submit" class="self-end" aria-label="Send">Send</base-button>
      </form>
      <div v-else>
        <h2>Thanks for reaching out</h2>
        <p>I'll try to get back to you as soon as possible. In the mean time, here's my favorite <a href="https://www.youtube.com/watch?v=APQ09eK99GA">14 second youtube video</a>. Enjoy.</p>
        <base-button @button-clicked="resetForm" class="mt-4">Say More</base-button>
      </div>
    </article>
  </Layout>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import BaseTextarea from '../components/BaseTextarea.vue'
export default {
  name: 'Contact',
  components: {
    BaseButton,
    BaseInput,
    BaseTextarea
  },
  metaInfo: {
    title: 'contact'
  },
  data() {
    return {
      formData: {},
      successfulSend: false,
      formError: false,
    }
  },
  computed: {
    formEmpty() {
      return this.formData.name && this.formData.email && this.formData.message
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      console.log(this.formData)
      if(!this.formEmpty || this.formData.name === '' || this.formData.email === '' || this.formData.message === '') {
        this.formError = true
        return
      }
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
      this.formError = false
    }
  }
}
</script>
