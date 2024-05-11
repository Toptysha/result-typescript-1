var totalPrice = function (_a) {
    var price = _a.price, _b = _a.discount, discount = _b === void 0 ? 0 : _b, _c = _a.isInstallment, isInstallment = _c === void 0 ? false : _c, _d = _a.months, months = _d === void 0 ? 12 : _d;
    var resCount = price - (price * (discount / 100));
    var result = isInstallment ? resCount / months : resCount;
    return Math.round(result);
};
var price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
