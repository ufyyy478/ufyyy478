let accounts;

window.onload = function() {
    console.log('dapp is loaded');
}

const enableeth = async () => {
accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err) => {
    // error handling.
    console.log(err.code);
})

console.log(accounts);
}