module.exports = {
    delete: {
      tags: ['Categories'],
      summary: 'Category Delete',
      description: 'Endpoint for delete Category',
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
          description: 'Delete Category.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' }
            }
          }
        },
        400: {
          description: 'Error response for delete Category.',
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
  