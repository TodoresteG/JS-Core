function solve(priceWithVat, vat) {
    let priceWithoutVat = 100 / (100 + vat) * priceWithVat;

    console.log(priceWithoutVat.toFixed(2));
}

solve(120.00,
    20.00
);