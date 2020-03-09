var discount = function (price, rate) {
    if (rate === void 0) { rate = 0.40; }
    return price * rate;
};
console.log(discount(500));
console.log(discount(500, 0.45));
