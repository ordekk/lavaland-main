const donation_address = "0x8eeeCfDCB92A279b88389589B9A986F279bA3f11";
	  
			async function connectMetamask() {
			  let web3Provider = null;
			  console.log("[web3] getting provider...");
			  // Modern Browsers like Chrome and Brave
			  if (window.ethereum) {
				web3Provider = window.ethereum;
				try {
				  // Request account access
				  await window.ethereum.enable();
				} catch (error) {
				  // User denied account access...
				  alert("You must connect your Metamask wallet !");
				  console.error("User denied account access to Metamask.");
				  return;
				}
			  } else {
				// you cant connect
				console.error("Unable to connect to Metamask");
				alert(
				  "You have to use Trustwallet or install Metamask to use this service, you can install it from :  https://metamask.io/download.html"
				);
				return;
			  }
			  let web3 = new Web3(window.ethereum);
			  let accounts = await web3.eth.getAccounts();
			  console.log("accounts : " + accounts);
			  window.account = accounts[0];
	  
			  document.getElementById("btn-metamask").innerHTML = "Connected";
	  
			  return web3;
			}
	  
			async function donateTokens() {
			  let amount = document.getElementById("presaleAmount").value;
			  let _web3 = await connectMetamask();
			  const Web3 = require('web3');
			  const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
			  const receipt = await _web3.eth.sendTransaction({
				from: window.account,
				to: donation_address,
				value: amount * 10 ** 18
			  });
			  console.log(receipt);
			}