window.addEventListener('load', function () {
            if (typeof web3 !== 'undefined') {
                console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
                window.web3 = new Web3(web3.currentProvider);
            } else {
                console.log('No Web3 Detected... using HTTP Provider')
                window.web3 = Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/4a5ee86782a240d48101e9adfbad7c6d"));
            }
        })
const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getprice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"support","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_NAME","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getinfo","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"_success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_f","type":"uint256"}],"name":"fwithdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_SYMBOL","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_daily","type":"uint256"}],"name":"setdaily","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_i","type":"uint256"}],"name":"iwithdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_DECIMAL_MULTIPLIER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_mail","type":"string"},{"name":"_mobile","type":"string"},{"name":"_nickname","type":"string"}],"name":"setinfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_DECIMALS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_coe","type":"uint256"}],"name":"setcoe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Withdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"referral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_e","type":"uint256"},{"name":"_ex","type":"uint256"}],"name":"setprice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_s","type":"uint256"}],"name":"swap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint256"}],"name":"aDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"_success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"care","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_DECIMALS_UINT8","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gettimeback","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_send","type":"uint256"}],"name":"sendabr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"setadmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
const Address = '0xe9C2851dADBb1Bb34Bceb54473a0E428a50D8845';
const contract = web3.eth.contract(ABI).at(Address);
const trans = { from: web3.eth.coinbase, gas: 300000 };
const x = function (error, result) {
			if (!error) {
				console.log(result);
			} else {
				console.log(error);
			} 
		}
const dec2 = 10**2;
const dec4 = 10**4;
const dec6 = 10**6;
const dec8 = 10**8;
const dec18 = 10**18;
function _setinfo() {
	var par_1 = document.getElementById("_mail").value;
	var par_2 = document.getElementById("_mobile").value;
	var par_3 = document.getElementById("_nickname").value;
	contract.setinfo.sendTransaction(par_1, par_2, par_3, trans, x);
}
function _referral() {
	var par = document.getElementById("_referral").value;
	contract.referral.sendTransaction(par, trans, x);
}
function _aDeposit() {
	var par = document.getElementById("_a").value * dec4;
	contract.aDeposit.sendTransaction(par, trans, x);
}
function _swap() {
	var par = document.getElementById("_s").value;
	contract.swap(par * dec2, { from: web3.eth.coinbase, value: web3.toWei(par, "ether")}, x);
}
function _clam() {
	contract.claim.sendTransaction(trans, x);
}
function _iwithdrawal() {
	var par = document.getElementById("_i").value * dec4;
	contract.iwithdrawal.sendTransaction(par, trans, x);
}
function _fwithdrawal() {
	var par = document.getElementById("_f").value * dec4;
	contract.fwithdrawal.sendTransaction(par, trans, x);
}
function _getprice() {
	contract.getprice.call(
		function (error, result) {
			if (!error) {
				var res = result / 100;
				document.getElementById("Price").innerHTML = "Exchange Rate: 1 ETH = " + res + " ABR";
			} else {
				console.log(error);
			}
		}
		);
}
function _getinfo() {
	contract.getinfo.call(
		function (error, result) {
			if (!error) {
				document.getElementById("Infonickname").innerHTML = "User Name: " + result[0];
				document.getElementById("Infostart").innerHTML = "Boot Date: " + result[1];
				document.getElementById("Infousddisplay").innerHTML = "Capital: " + result[2]/dec8 + " USD";
				document.getElementById("Infousdinterest").innerHTML = "Profit: " + result[3]/dec8 + " USD";
				document.getElementById("Infoabrdisplay").innerHTML = "ABR Accumulation: " + result[4]/dec4 + " ABR";
			} else {
				console.log(error);
			}
		}
		);
}
function _gettimeback() {
	contract.gettimeback.call(
		function (error, result) {
			if (!error) {
				document.getElementById("Timeback").innerHTML = "Date Due: " + result + " Days";
			} else {
				console.log(error);
			}
		}
		);
} 
function _support() {
	contract.support.call(
		function (error, result) {
			if (!error) {
				document.getElementById("Support1").innerHTML = "Email: " + result[0];
				document.getElementById("Support2").innerHTML = "Phone: " + result[1];
				document.getElementById("Support3").innerHTML = "User Name: " + result[2];
			} else {
				console.log(error);
			}
		}
		);
}
function _total() {
	contract.total.call(
		function (error, result) {
			if (!error) {
				document.getElementById("sl").innerHTML = "Total Member: " + result[0] + " People";
				document.getElementById("tt").innerHTML = "Total Money: " + result[1]/dec8 + " USD";
			} else {
				console.log(error);
			}
		}
		);
}
function _care() {
	var par = document.getElementById("_id").value;
	contract.care.call(par -1,
		function (error, result) {
			if (!error) {
				document.getElementById("v1").innerHTML = "Email: " + result[0];
				document.getElementById("v2").innerHTML = "Phone: " + result[1];
				document.getElementById("v3").innerHTML = "User Name: " + result[2];
				document.getElementById("v4").innerHTML = "Capital: " + result[3]/dec8 + " USD";
			} else {
				console.log(error);
			}
		}
		);
}
_getprice();
_getinfo();
_gettimeback();
_support()
_total();
_care();
