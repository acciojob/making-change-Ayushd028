function makeChange(c) {
    let c = { q: 0, d: 0, n: 0, p: 0 };

    c.q = Math.floor(amount / 25); 
    amount %= 25; 

    c.d = Math.floor(amount / 10); 
    amount %= 10; 

    c.n = Math.floor(amount / 5); 
    amount %= 5; 

    c.p = amount; 

    return c;
}


// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
