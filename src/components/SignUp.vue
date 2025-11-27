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
        <label>USERNAME</label>
        <input type="text" />

        <label>PASSWORD</label>
        <input type="password" />

        <label>CONFIRM PASSWORD</label>
        <input type="password" />

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
  background-color: #061857; 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;      
  justify-content: center;
  align-items: center;
}

.card {
  background: #f7f3ee;
  width: 420px;
  padding: 40px 50px;
  border-radius: 20px;
  text-align: center;
}

.titles {
    width: 420px;
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px; 
}

.title {
  font-size: 40px;
  margin-bottom: 5px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
}

.highlight {
  color: #f4c542;
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
  color: #061857;
}

input {
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #061857;
  font-size: 16px;
  outline: none;
}

.login-btn {
  background: #061857;
  color: white;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.login-btn:hover {
  background: #0b1f80;
}

.signup-text {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #061857;
}

.signup-text a {
  color: #061857;
  font-weight: 700;
  text-decoration: underline;
}
</style>
