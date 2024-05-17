<script>
  let password = '';
  let confirmPassword = '';
  let checkbox1 = false;
  let checkbox2 = false;

  function handleNext() {
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Checkbox1:', checkbox1);
    console.log('Checkbox2:', checkbox2);
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
    width: 100%;
    max-width: 400px;
  }

  .form-group input[type="password"] {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .checkbox-group {
    margin-bottom: 1rem;
    width: 100%;
    max-width: 400px;
  }

  .button {
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<div class="container">
  <img src="/path/to/logo.png" alt="MyNearWallet Logo" />
  <div class="title">Create a Password</div>
  <div class="form-group">
    <label for="password">Enter Password</label>
    <input id="password" type="password" bind:value={password} />
  </div>
  <div class="form-group">
    <label for="confirmPassword">Confirm Password</label>
    <input id="confirmPassword" type="password" bind:value={confirmPassword} />
  </div>
  <div class="checkbox-group">
    <input id="checkbox1" type="checkbox" bind:checked={checkbox1} />
    <label for="checkbox1">I acknowledge that this password cannot be used to recover my accounts...</label>
  </div>
  <div class="checkbox-group">
    <input id="checkbox2" type="checkbox" bind:checked={checkbox2} />
    <label for="checkbox2">I acknowledge that storing this password in my browser's password manager...</label>
  </div>
  <button class="button" on:click={handleNext}>Next</button>
</div>
