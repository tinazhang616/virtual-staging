export default function totalPrice(state) {
  let discount = state.discount;
  let VSDiscount = state.VSDiscount;
  let services = state.service;
  let total = services.reduce((a, e) => {
    if (
      e.service === "Virtual Staging" ||
      e.service === "Virtual Staging - Plus"
    ) {
      let subtotal = e.quantity * e.price * VSDiscount * discount;
      a += subtotal;
    } else {
      let subtotal = e.quantity * e.price * discount;
      a += subtotal;
    }
    return a;
  }, 0);
  return total;
}
