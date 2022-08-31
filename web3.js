function tekcift(sayi) {
    let rakam = 0;
    for (let digit = number.toString().length - 1; digit >= 0; digit--) {

        const figure = Math.floor(number / Math.pow(10, digit))
        rakam += figure;
        sayi -= figure * Math.pow(10, digit)

    }

    if (rakam % 2 == 1) {

        console.log("odd");
        return "odd";

    }
    console.log("even");
    return "even";
}

tekcift(156);
