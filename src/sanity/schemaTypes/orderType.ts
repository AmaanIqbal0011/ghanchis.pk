import { defineField, defineType } from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string'
    }),
   
    defineField({
      name: 'userInfo',
      title: 'User Info',
      type: 'object',
      fields: [
        defineField({ name: 'firstName', title: 'First Name', type: 'string' }),
        defineField({ name: 'lastName', title: 'Last Name', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'country', title: 'Country', type: 'string' }),
        defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'paymentMethod', title: 'Payment Method', type: 'string' }),
        defineField({ name: 'clerkId', title: 'Clerk ID', type: 'string' }),
      ]
    }),
    defineField({
      name: 'basket',
      title: 'Basket',
      type: 'array',
      of: [
        defineField({
          name: 'basketItem',
          title: 'Basket Item',
          type: 'object',
          fields: [
            defineField({ name: 'quantity', title: 'Quantity', type: 'number' }),
            defineField({
              name: 'product',
              title: 'Product',
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'price', title: 'Price', type: 'number' }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true }
                }),
                defineField({
                  name: 'size',
                  title: 'Size',
                  type: 'object',
                  fields: [
                    defineField({ name: 'ageGroup', title: 'Age Group', type: 'string' }),
                    defineField({ name: 'chest', title: 'Chest', type: 'number' }),
                    defineField({ name: 'fitting', title: 'Fitting', type: 'string' }),
                    defineField({ name: 'kameezLength', title: 'Kameez Length', type: 'number' }),
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                    defineField({ name: 'paienchaWidth', title: 'Paiencha Width', type: 'number' }),
                    defineField({ name: 'shalwarLength', title: 'Shalwar Length', type: 'number' }),
                    defineField({ name: 'shoulder', title: 'Shoulder', type: 'number' }),
                    defineField({ name: 'sleevesLength', title: 'Sleeves Length', type: 'number' }),
                    defineField({ name: 'sleevesStyle', title: 'Sleeves Style', type: 'string' })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number'
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime'
    }),
     defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' }
        ],
        layout: 'radio' 
      },
      initialValue: 'pending' 
    }),
  ],
  preview: {
    select: {
      title: 'orderId',
      firstName: 'userInfo.firstName',
      lastName: 'userInfo.lastName',
      date: 'timestamp',
      basket: 'basket',
      totalPrice: 'totalPrice',
      status: 'status'
    },
    prepare({ title, firstName, lastName, date, basket, totalPrice, status }) {
      return {
        title: `${firstName || ''} ${lastName || ''} (${title || 'No ID'})`,
        subtitle: `${status || 'pending'} — ${basket?.length || 0} items — ${totalPrice ? `Rs. ${totalPrice}` : 'No Price'} — ${date ? new Date(date).toLocaleString() : 'No Date'}`
      }
    }
  }
})

export default orderType
