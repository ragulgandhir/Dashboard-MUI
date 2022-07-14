module.exports = {
    put: {
      tags: ['Users'],
      summary: 'User Update',
      description: 'Endpoint for user update',
      procedures: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'User ID',
          required: true
        },
        {
          in: 'body',
          name: 'userData',
          description: 'User data for update',
          required: true,
          schema: {
            properties: {
               name: { type: 'string' },
               email: { type: 'string' },
               address:  { type: 'string' },
               mobileNumber: { type: 'string' }
            }
          }
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
          description: 'User Updated.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  user: { type: 'object' }
                }
              }
            }
          }
        },
        400: {
          description: 'Error response for user details.',
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
  