module.exports = {
    get: {
      tags: ['Categories'],
      summary: 'Category List',
      description: 'Endpoint for get Category',
      procedures: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Category ID',
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
          description: 'Category details.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  Category: { type: 'object' }
                }
              }
            }
          }
        },
        400: {
          description: 'Error response for Category details.',
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
  