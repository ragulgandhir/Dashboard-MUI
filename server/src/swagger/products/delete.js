module.exports = {
    delete: {
      tags: ['Products'],
      summary: 'Product Delete',
      description: 'Endpoint for delete product',
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
          description: 'Delete Product.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' }
            }
          }
        },
        400: {
          description: 'Error response for delete Product.',
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
  