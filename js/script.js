function isPrime(n) {
	if (n === 1) {
		return false;
	}
	else if (n === 2) {
		return true;
	} else {
		for (var i = 2; i < n; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}
}

console.log('is 98 prime number: '+isPrime(98));
console.log('is 97 prime number: '+isPrime(97));