<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- LEFT SIDE: CONTACT FORM -->
      <div class="contact-section">
        <h2 class="footer-title">CONTACT US</h2>

        <form @submit.prevent="submitForm" novalidate>
          <div class="form-group">
            <label for="footer-name">Name:</label>
            <input
              id="footer-name"
              type="text"
              class="input-box"
              v-model.trim="form.name"
              placeholder="Your name"
              :class="{ 'input-error': errors.name }"
            />
            <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="footer-email">Email:</label>
            <input
              id="footer-email"
              type="email"
              class="input-box"
              v-model.trim="form.email"
              placeholder="your@email.com"
              :class="{ 'input-error': errors.email }"
            />
            <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="footer-note">Note:</label>
            <textarea
              id="footer-note"
              class="text-area"
              v-model.trim="form.note"
              placeholder="Write us a message..."
              :class="{ 'input-error': errors.note }"
            ></textarea>
            <span class="error-msg" v-if="errors.note">{{ errors.note }}</span>
          </div>

          <button type="submit" class="submit-btn" :disabled="submitted">
            {{ submitted ? 'Message Sent!' : 'SEND MESSAGE' }}
          </button>
        </form>
      </div>

      <!-- RIGHT SIDE: SOCIALS -->
      <div class="social-section">
        <h2 class="footer-title">CONNECT WITH US!</h2>

        <div class="social-links">
          <a
            href="https://instagram.com/thepawboba"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <div class="social-info">
              <span class="social-label">Instagram</span>
              <span class="social-handle">@thepawboba</span>
            </div>
          </a>

          <a
            href="mailto:thepawboba@gmail.com"
            class="social-link"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.868l8 5 8-5V18z"/>
            </svg>
            <div class="social-info">
              <span class="social-label">Email</span>
              <span class="social-handle">thepawboba@gmail.com</span>
            </div>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', note: '' })
const errors = reactive({ name: '', email: '', note: '' })
const submitted = ref(false)

function validate() {
  errors.name = form.name ? '' : 'Name is required.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email is required.'
  errors.note = form.note ? '' : 'Message cannot be empty.'
  return !errors.name && !errors.email && !errors.note
}

function submitForm() {
  if (!validate()) return
  submitted.value = true
  // Reset after 3s so the form can be reused
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.note = ''
  }, 3000)
}
</script>

<style scoped>
.footer {
  background-color: #3017FE;
  padding: 40px 5%;
  width: 100%;
  color: white;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* Left side */
.contact-section {
  flex: 2;
}

.footer-title {
  font-size: clamp(18px, 2.5vw, 26px);
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}

/* Form fields */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
}

.input-box {
  width: 100%;
  padding: 12px;
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 8px;
  color: #3017FE;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 15px;
  transition: border-color 0.2s;
}

.input-box::placeholder {
  color: #9080FF;
}

.input-box:focus {
  outline: none;
  border-color: #ffffff;
}

.input-box.input-error {
  border-color: #FF6B6B;
}

.text-area {
  width: 100%;
  height: 120px;
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 12px;
  resize: none;
  color: #3017FE;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 15px;
  transition: border-color 0.2s;
}

.text-area::placeholder {
  color: #9080FF;
}

.text-area:focus {
  outline: none;
  border-color: #ffffff;
}

.text-area.input-error {
  border-color: #FF6B6B;
}

.error-msg {
  display: block;
  font-size: 12px;
  color: #FFB3B3;
  margin-top: 4px;
}

.submit-btn {
  margin-top: 8px;
  background: #ffffff;
  color: #3017FE;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.85;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: default;
}

/* Right side */
.social-section {
  flex: 1;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: white;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 12px 16px;
  transition: background 0.2s;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.22);
}

.social-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.social-info {
  display: flex;
  flex-direction: column;
}

.social-label {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.social-handle {
  font-size: 15px;
  font-weight: 700;
}

@media (max-width: 640px) {
  .footer-content {
    flex-direction: column;
  }

  .social-section {
    width: 100%;
  }
}
</style>
