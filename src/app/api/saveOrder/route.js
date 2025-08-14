// src/app/api/saveOrder/route.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
});

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Calculate totalPrice
    const totalPrice = body.basket.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);

    const result = await client.create({
      _type: 'order',
      orderId: body.orderId,
      userInfo: {
        firstName: body.userInfo.firstName,
        lastName: body.userInfo.lastName,
        email: body.userInfo.email,
        address: body.userInfo.address,
        city: body.userInfo.city,
        country: body.userInfo.country,
        phoneNumber: body.userInfo.phoneNumber,
        paymentMethod: body.userInfo.paymentMethod,
        clerkId: body.userInfo.clerkId,
      },
      basket: body.basket.map(item => ({
        quantity: item.quantity,
        product: {
          name: item.product.title,
          size: item.product.size,
          price: item.product.price,
          image: item.product.image
        }
      })),
      totalPrice, 
      timestamp: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error) {
    console.error('Sanity Save Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}











// // // src/app/api/saveOrder/route.js
// // import { createClient } from '@sanity/client';
// // import { NextResponse } from 'next/server';

// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   useCdn: false,
// //   apiVersion: '2023-01-01',
// //   token: process.env.SANITY_WRITE_TOKEN, // write token
// // });

// // export async function POST(req) {
// //   try {
// //     const orderData = await req.json(); // App Router me req.json() hota hai

// //     const result = await client.create({
// //       _type: 'order',
// //       ...orderData
// //     });

// //     return NextResponse.json({ success: true, result });
// //   } catch (error) {
// //     console.error('Sanity Save Error:', error);
// //     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
// //   }
// // }


// // src/app/api/saveOrder/route.js
// import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   apiVersion: '2023-01-01',
//   token: process.env.SANITY_WRITE_TOKEN,
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const result = await client.create({
//       _type: 'order',
//       orderId: body.orderId,
//       userInfo: {
//         firstName: body.userInfo.firstName,
//         lastName: body.userInfo.lastName,
//         email: body.userInfo.email,
//         address: body.userInfo.address,
//         city: body.userInfo.city,
//         country: body.userInfo.country,
//         phoneNumber: body.userInfo.phoneNumber,
//         paymentMethod: body.userInfo.paymentMethod,
//         clerkId: body.userInfo.clerkId,
//       },
//       basket: body.basket.map(item => ({
//         quantity: item.quantity,
//         product: {
//           name: item.product.title,
//           size:item.product.size,
//           price: item.product.price,
//           image:item.product.image
//         }
//       })),
//       timestamp: new Date().toISOString(),
//     });

//     return new Response(JSON.stringify({ success: true, result }), { status: 200 });
//   } catch (error) {
//     console.error('Sanity Save Error:', error);
//     return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
//   }
// }

