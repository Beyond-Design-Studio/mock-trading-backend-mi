
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
module.exports = {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    async find(ctx) {
        // console.log(ctx.state);
        return await strapi.query('portfolio').findOne({ id: ctx.state.user.portfolio });
    },
    async findAll(ctx) {
        return await strapi.query('portfolio').find();
    },
};



