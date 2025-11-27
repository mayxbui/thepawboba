<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- LEFT SIDE: CONTACT FORM -->
      <div class="contact-section">
        <h2 class="footer-title">CONTACT US</h2>

        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="input-box" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="input-box" />
        </div>

        <div class="form-group">
          <label>Note:</label>
          <textarea class="text-area"></textarea>
        </div>
      </div>

      <!-- RIGHT SIDE: SOCIALS -->
      <div class="social-section">
        <h2 class="footer-title">CONNECT WITH US!</h2>

        <div class="social-icons">
          <div class="icon-box"></div>
          <div class="icon-box"></div>
          <div class="icon-box"></div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #0a1c57; /* navy */
  padding: 40px;
  width: 100%;
  color: white;
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
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
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
  background: #dcdcdc;
  border: none;
  border-radius: 8px;
}

.text-area {
  width: 100%;
  height: 120px;
  background: #dcdcdc;
  border: none;
  border-radius: 8px;
  padding: 12px;
  resize: none;
}

/* Right side */
.social-section {
  flex: 1;
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.icon-box {
  width: 60px;
  height: 60px;
  background: #dcdcdc;
  border-radius: 8px;
}
</style>
