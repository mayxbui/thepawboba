<template>
  <div class="login-container">
    <!-- titles above the card -->
    <div class="titles">
        <h1 class="title">
            HIVE <span class="highlight">TEA</span>
        </h1>
        <h1 class="title">SIGN UP</h1>
    </div>

    <!-- login card -->
    <div class="card">
      <form class="form">
        <label for="signup-username">USERNAME</label>
        <input id="signup-username" type="text" />

        <label for="signup-password">PASSWORD</label>
        <input id="signup-password" type="password" />

        <label for="signup-confirm">CONFIRM PASSWORD</label>
        <input id="signup-confirm" type="password" />

        <button class="login-btn">CREATE ACCOUNT</button>

        <p class="signup-text">
          Already have an account? <a href="/login">Log in!</a>
        </p>
        <p class="signup-text">
          <a href="/home">Go back</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
};
</script>

<style scoped>
.login-container {
  background-color: #3017FE;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  box-sizing: border-box;
}

.card {
  background: #ffffff;
  width: min(420px, 100%);
  padding: 40px clamp(24px, 5vw, 50px);
  border-radius: 0;
  border: 2px solid #ffffff;
  text-align: center;
  box-sizing: border-box;
}

.titles {
    width: min(420px, 100%);
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.title {
  font-size: clamp(28px, 5vw, 40px);
  margin-bottom: 5px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
}

.highlight {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 12px;
}

label {
  font-size: 14px;
  font-weight: 700;
  color: #3017FE;
}

input {
  padding: 12px;
  border-radius: 0;
  border: 2px solid #3017FE;
  font-size: 16px;
  outline: none;
}

.login-btn {
  background: #3017FE;
  color: white;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.login-btn:hover {
  background: #2010C8;
}

.signup-text {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #3017FE;
}

.signup-text a {
  color: #3017FE;
  font-weight: 700;
  text-decoration: underline;
}
</style>
