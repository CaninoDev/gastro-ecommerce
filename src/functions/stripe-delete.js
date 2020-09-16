const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// This API won't actually delete; rather it will deactivate the product/price. This is due to a limitation with Stripe's API.
module.exports.handler = async (event, context, callback) => {
  try {
    const requestBody = JSON.parse(event.body)
    // Check for existence of the product to be de-activated.
    const prices = await stripe.prices.list()

    // To be deactivated object
    if (requestBody.id.substr(0, 3) === "pri") {
      await stripe.prices.update(requestBody.id, { active: false })
      await stripe.products.update(price.product, { active: false })
    } else if (requestBody.id.substr(0, 3) === "pro") {
      const priceObj = prices.data.find(
        price => price.product === requestBody.id
      )
      await stripe.prices.update(priceObj.id, { active: false })
      await stripe.products.update(requestBody.id, { active: "false" })
    }

    const response = {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: "",
    }

    callback(null, response)
  } catch (error) {
    callback(error.message)
  }
}
