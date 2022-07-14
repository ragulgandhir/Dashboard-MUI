module.exports = {
    post: {
      tags: ['Admin'],
      summary: 'Admin Login',
      description: 'Endpoint for admin login',
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
                  token: { type: 'string' },
                  userList: { type: 'string' }
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
  