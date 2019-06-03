function prime(n) {

    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return 'Ce nombre n\'est pas un nombre premier';
            }
        }
        return 'Ce nombre est un nombre premier !';
    }
}

console.log(prime(13));