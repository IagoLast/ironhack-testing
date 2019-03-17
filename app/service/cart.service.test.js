require = require('esm')(module);
const cartService = require('./cart.service.js').default;

describe('cart-service', () => {
    describe('.getPrice', () => {
        it('should be defined', () => {
            const actual = cartService.getPrice;
            expect(actual).toBeDefined();
        });
    });
});