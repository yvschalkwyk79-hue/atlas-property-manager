export async function sendMessageToSeller(sellerId, propertyId, offer) {
  console.log(Sending offer  to seller  for property );
  return { status: 'success', message: 'Offer sent' };
}

export async function sendMessageToBuyer(buyerId, propertyId, bid) {
  console.log(Sending bid  to buyer  for property );
  return { status: 'success', message: 'Bid sent' };
}
