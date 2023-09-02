import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const response = await req.json();
    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: 'shr_1Ni49WGKeytTcMrnvcE10P85'},
                {shipping_rate: 'shr_1Ni4AzGKeytTcMrn7F1EOQFF'}
            ],
            line_items: response.cartItems.map(item => {
              const img = item.image[0].asset._ref;
              const stripeProjectId = "t7l7pyhh"
              const newImage = img.replace('image-', `https://cdn.sanity.io/images/${stripeProjectId}/production/`).replace('-webp', '.webp');
              return {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.name,
                    images: [newImage] 
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled: true, 
                  minimum: 1
                },
                quantity: item.quantity 
              }
            }),
            success_url: `${req.headers.get('origin')}/?success=true`,
            cancel_url: `${req.headers.get('origin')}/?canceled=true`,
          }
      // // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      
      // res.status(200).json(session)
      return NextResponse.json({status: 200, session})
    } catch (err) {
      return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 }) 
    }
}

