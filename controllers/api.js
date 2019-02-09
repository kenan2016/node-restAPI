var products = ['vue','react','angular'];

module.exports = {
    'GET /api/products': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        // 设置Response Body:
        ctx.response.body = {
            products: products
        };
    },
    'GET /api/products2': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        // 设置Response Body:
        ctx.response.body = {
            products: products
        };
    }
}
