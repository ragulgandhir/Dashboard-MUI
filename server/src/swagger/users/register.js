
module.exports = {
  post: {
    tags: ['Users'],
    summary: 'User Registration',
    description: 'Endpoint for user registration',
    parameters: [
      {
        in: 'body',
        name: 'registrationData',
        description: 'User registration details.',
        required: true,
        schema: {
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
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
      }
    ],
    responses: {
      200: {
        description: 'Success response for registration.',
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
        description: 'Failure response for registration.',
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
