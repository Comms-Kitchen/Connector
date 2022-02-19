// Moralis

//Initialise
Moralis.initialize("XXH5d3yaXUkZHWKo1vqeJQwaAOEZBYJti207bZA2"); // Application id from moralis.io
Moralis.serverURL = "https://edjvbdkaog2i.usemoralis.com:2053/server"; //Server url from moralis.io
window.userWalletAddress = null;

// Watch for button click
function toggleButton() {
  if (!window.ethereum) {
    loginButton.innerText = 'MetaMask is not installed';
    loginButton.classList.remove('bg-purple-500', 'text-white');
    loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed');
    return false;
  }
  loginButton.addEventListener('click', moralisLogin);

}


// Login with Moralis
async function moralisLogin() {
  console.log("Login to Moralis triggered");
  var user = await Moralis.Web3.authenticate();
  var button = document.getElementById("loginButton");
  if (user) {
    user.set("Wallet Connector", "V0.0.1");
    user.save();
    button.style.display = "none";
    loginButton.innerText = 'Please refresh your browser window';
    window.userWalletAddress = user.id + "." + Moralis.Web3.account;
    makeCode();
  }
}

// Initialize button watch
window.addEventListener('DOMContentLoaded', () => {
  toggleButton();
});