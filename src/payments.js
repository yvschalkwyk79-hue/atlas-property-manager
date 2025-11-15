export async function sendPaypal(amount, recipientEmail) {
  console.log(Simulated PayPal payout: \RemoteSigned{amount} to \);
  return 'PAYPAL_TX_123';
}

export async function sendBankTransfer(amount) {
  console.log(Simulated bank transfer: \RemoteSigned{amount});
  return 'BANK_TX_456';
}
