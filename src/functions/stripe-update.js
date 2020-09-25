const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// TODO: Add functionality to fully update a product despite Stripe's update limitation to 'metadata', 'nickname', & 'active' fields
module.exports.handler = async (event, context, callback) => {
  try {
    const requestBody = JSON.parse(event.body)
    const { id, object } = requestBody

    var updatedObject
    if (id.substr(0, 3) === "pri") {
      updatedObject = await stripe.prices.update(id, { ...object })
    } else if (id.substr(0, 3) === "pro") {
      updatedObject = await stripe.products.update(id, { ...object })
    }

    const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedObject }),
    }

    callback(null, response)
  } catch (error) {
    callback(error.message)
  }
}
