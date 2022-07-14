module.exports = {
    get: {
      tags: ['Products'],
      summary: 'Product List',
      description: 'Endpoint for get product',
      procedures: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Product ID',
          required: true
        },
        {
          name: 'Content-Type',
          type: 'string',
          in: 'header',
          required: true,
          value: 'application/json'
        },
        {
          name: 'x-authtoken',
          type: 'string',
          in: 'header',
          required: true,
          value: ''
        }
      ],
      responses: {
        200: {
          description: 'Product details.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  Product: { type: 'object' }
                }
              }
            }
          }
        },
        400: {
          description: 'Error response for Product details.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' }
            }
          }
        }
      }
    }
  }
  