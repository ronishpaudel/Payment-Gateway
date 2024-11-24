# Payment Integration Project

A Next.js application demonstrating integration with multiple payment gateways including eSewa, Khalti, and Stripe.

## Features

- Multiple payment gateway integrations
  - eSewa (Nepal)
  - Khalti (Nepal)
  - Stripe (International)
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Server-side payment processing
- Payment status verification
- Error handling and logging

## Prerequisites

Before you begin, ensure you have:

- Next.js(latest) installed
- Payment gateway test credentials:
  - eSewa Merchant Code and Secret Key
  - Khalti Public and Secret Keys
  - Stripe Public and Secret Keys

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_ESEWA_MERCHANT_CODE=your_merchant_code
NEXT_PUBLIC_ESEWA_SECRET_KEY=your_secret_key
NEXT_PUBLIC_KHALTI_SECRET_KEY=your_khalti_key
STRIPE_SECRET_KEY=your_stripe_key
```
