/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const stripePromise = loadStripe(
  "pk_test_51Gsyi3GuPXrd5SADNu0p4FJcKGE7oTfWuemre8fvW0Zr4whA1dZzsFMBL42EStX6h7XoHL0DbKpXwAZVwV3HiNLM00s5Rt739H"
)

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripePromise}>{element}</Elements>
)
