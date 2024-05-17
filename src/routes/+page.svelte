<!-- src/routes/+page.svelte -->
<script>
  import { goto } from '$app/navigation';

  function createAccount() {
    goto('./createAccount/+page.svelte');
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

  .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .button {
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
  }
</style>

<div class="container">
  <!-- <img src="/path/to/logo.png" alt="MyNearWallet Logo" /> -->
  <div class="title">Arth Wallet is here.</div>
  <div class="subtitle">
    Securely store and stake your tokens and compatible assets with Arth Wallet.
  </div>
  <button class="button" on:click={createAccount}>Create Account</button>
  <button class="button">Import Existing Account</button>
</div>
