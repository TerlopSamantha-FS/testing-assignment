function obscureCreditCard(cardNumber) {
    if (cardNumber.length < 12 || cardNumber.length > 16) {
        return "Invalid Credit Card";
    }
    const visibleDigits = cardNumber.slice(-4);
    const obscured = '*'.repeat(cardNumber.length - 4) + visibleDigits;
    return obscured;
}
module.exports = { obscureCreditCard };
