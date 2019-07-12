const terra = require('@terra-money/core');
const config = require('../config/env.json');
const fetch = require('node-fetch');
const retriveData = require('./retriveData');
const costCalculator = require('./costCalculator');

async function get_fee_amount(amount, currency){
	let url = config.TERRA_ADDRESS + '/treasury/tax-rate';

	req_res = await fetch(url);
	data = req_res.json();

	tax_rate = data.tax_rate;

	url = config.TERRA_ADDRESS + '/treasury/tax-cap/' + currency;

	req_res = await fetch(url);
	data = req_res.json();

	tax_cap = data.tax_cap;

	const fee_amount = min(Number(tax_rate) * amount, Number(tax_cap));

	return fee_amount;
}

function get_chain_id(){
	return "testing"
}

function create_broadcastbody(fee_amount, amount, currency, accAddr, to_address, memo, gas_amount, sequence, account_number, chain_id){
	const msgSend = terra.buildSend([
	  {
	    "amount": amount,
	    "denom": currency
	  }
	], accAddr, to_address);

	const stdTx = terra.buildStdTx([msgSend], {
	  "gas": gas_amount,
	  "amount": [
	    {
	      "amount": fee_amount,
	      "denom": currency
	    }
	  ]
	}, memo);

	const jsonTx = stdTx.value;
	const txSignature = terra.sign(jsonTx, keypair, {
	  sequence: sequence,
	  account_number: account_number,
	  chain_id: chain_id
	});
	const signedTx = terra.createSignedTx(stdTx.value, txSignature);
	const broadcastBody = terra.createBroadcastBody(signedTx, "block");

	return broadcastBody;

}

async function transfer(pin, to_address, currency, amount, memo){
	const keypair = retriveData.getKeyPair(pin);
	const fee_amount = await get_fee_amount(Number(amount), currency);
	const accAddr = terra.getAccAddress(keypair.publicKey);
	const chain_id = get_chain_id();
	const temp_var = retriveData.getAccountInfo(accAddr);
	const sequence = temp_var.sequence;
	const account_number = temp_var.account_number;

	const temp_broadcastBody = create_broadcastbody(fee_amount, amount, currency, accAddr, to_address, memo, "200000", sequence, account_number, chain_id);

	const gas_amount = (costCalculator.getGas(temp_broadcastBody, 1) * 1.5).toString();

	const broadcastBody = create_broadcastbody(fee_amount, amount, currency, accAddr, to_address, memo, gas_amount, sequence, account_number, chain_id);

	const URL = config.TERRA_ADDRESS + '/txs';

	let req_res, data

	try{
		req_res = await fetch(URL, {method : "POST", body : broadcastBody});
		data = await req_res.json();
	} catch (error){
		return {
			error : true,
			message : error
		}
	}

	return data
}

const account_helper = require('./accountHelpers');

const account = account_helper.create_new_user('1234');

console.log(account);