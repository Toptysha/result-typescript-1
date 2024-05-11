var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    if (isInstallment) {
        return (price - (price * (discount / 100))) / months;
    }
    return (price - (price * (discount / 100)));
};
var price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
