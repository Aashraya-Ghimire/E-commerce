const totalAmount = (dta) => {
  let totalAmount = 0;
  dta.forEach(
    (data) =>
      (totalAmount =
        totalAmount + Number(data.caloriesPerServing) * Number(data.quantity))
  );
  return totalAmount;
};
export default totalAmount;
