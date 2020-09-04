/**
 * Stripe's API require the following objects to create a
 * product/price.
 * product: {
 *  id
 *  name
 *  active
 *  description
 *  metadata
 * }

 * price: {
 *  currency {string} required
 *  unit_amount {number} required
 *  active {bool} required
 *  metadata {object} optional
 *  product {string} required
 *  nickname {string} optional
 *  recurring {object} optional
 *  product_data {object} optional (see product object above)
 * }
 */
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

/**
 * POST endpoint for creating a price/product object on stripe's severs.
 *
 * @param {object} event The post request containing price and product data for creation.
 * @param {object} context The authurization/authnentication context for access
 * @param {function} callback The callback function to call to send back a response.
 */
module.exports.handler = async (event, context, callback) => {
  /**
   * The requestBody should contain:
   *  currency {string} required
   *  unit_amount {number} required
   *  active {bool} required
   *  product {object} required
   *      name {string} required
   *      description {string} required
   *      side_product_id {string} required
   *
   */
  try {
    const requestBody = JSON.parse(event.body)

    const { unit_amount, active, product, currency } = requestBody
    const { name, description, side_product_id } = product

    const product_data = {
      name,
      description,
      type: "good",
      metadata: {
        side_product_id,
      },
    }

    const newProduct = await stripe.products.create({ ...product_data })

    const newPrice = await stripe.prices.create({
      currency,
      unit_amount,
      active,
      product: newProduct.id,
    })

    const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: newPrice.product,
        price_id: newPrice.id,
      }),
    }

    callback(null, response)
  } catch (error) {
    callback(error.message)
  }
}
