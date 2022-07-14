module.exports = {
    post: {
      tags: ['Users'],
      summary: 'User Login',
      description: 'Endpoint for user login',
      parameters: [
        {
          in: 'body',
          name: 'loginCredentials',
          description: 'Send email & password.',
          required: true,
          schema: {
            properties: {
              email: { type: 'string' },
              password: { type: 'string' }
            }
          }
        },
        {
          name: 'Content-Type',
          type: 'string',
          in: 'header',
          required: true,
          value: 'application/json'
        }
      ],
      responses: {
        200: {
          description: 'Success response for login.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  token: { type: 'string' }
                }
              }
            }
          }
        },
        400: {
          description: 'Response for invalid login.',
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
  