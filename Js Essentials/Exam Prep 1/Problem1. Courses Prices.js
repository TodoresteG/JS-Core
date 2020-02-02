function solve(fundamentals, advanced, apps, form) {
    let totalPrice = 0;

    let fundamentalsMoney = 170;
    let advancedMoney = 180;
    let appsMoney = 190;

    
    if (form === 'online') {
        fundamentalsMoney = fundamentalsMoney - (fundamentalsMoney * 0.06);
        advancedMoney = advancedMoney - (advancedMoney * 0.06);
        appsMoney = appsMoney - (appsMoney * 0.06);
    }

    if (fundamentals === true && advanced === false && apps === false) {
        totalPrice = fundamentalsMoney;
    }

    if (fundamentals === false && advanced === true && apps === false) {
        totalPrice = advancedMoney;
    }

    if (fundamentals === false && advanced === false && apps === true) {
        totalPrice = appsMoney;
    }

    if (fundamentals === false && advanced === true && apps === true) {
        totalPrice = advancedMoney + appsMoney;
    }

    if (fundamentals === true && advanced === false && apps === true) {
        totalPrice = fundamentalsMoney + appsMoney;
    }

    if (fundamentals === true && advanced === true && apps === false) {
        let discount = advancedMoney * 0.1;
        totalPrice = fundamentalsMoney + advancedMoney - discount;
    }

    if (fundamentals === true && advanced === true && apps === true) {
        let advancedDiscount = advancedMoney * 0.1;

        let moduleTotalPrice = fundamentalsMoney + appsMoney + (advancedMoney - advancedDiscount);
        let discount = moduleTotalPrice * 0.06;
        totalPrice = moduleTotalPrice - discount;
    }

    console.log(Math.round(totalPrice));
}

solve(true,true,true,"onsite");