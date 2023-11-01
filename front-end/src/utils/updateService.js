export default function updateSevice(oldService, newService) {
  let update = oldService;
  let services = update.service;
  let servicesUpdate = Object.keys(newService);
  let result = services.map((e) => {
    const serviceName = e.service;
    if (servicesUpdate.includes(serviceName)) {
      console.log("include", e.quantity, newService[serviceName]);
      return { ...e, quantity: newService[serviceName] };
    }
    return e;
  });
  //   console.log("this is updated oldservice", result);
  result.forEach((e) => {
    const serviceName = e.service;
    if (
      serviceName === "Virtual Staging" ||
      serviceName === "Virtual Staging - Plus"
    ) {
      if (e.quantity >= 50) {
        update = { ...update, VSDiscount: 0.75 };
      } else if (e.quantity >= 25) {
        update = { ...update, VSDiscount: 0.8 };
      } else if (e.quantity >= 10) {
        // console.log("vsdiscount", update.VSDiscount);
        update = { ...update, VSDiscount: 0.9 };
      } else {
        update = { ...update, VSDiscount: 1 };
      }
    }
  });
  update = { ...update, service: result };
  //   console.log("this is update", update);

  return update;
}
