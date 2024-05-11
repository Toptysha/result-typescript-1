interface TotalPrice {
    price: number, 
    discount?: number, 
    isInstallment?: boolean, 
    months?: number
}

const totalPrice = ({ price, discount = 0, isInstallment = false, months = 12 }: TotalPrice): number => {
    let resCount = price - (price * (discount / 100))
    let result = isInstallment ? resCount / months : resCount
    return Math.round(result)
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250