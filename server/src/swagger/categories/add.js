
module.exports = {
    post: {
      tags: ['Categories'],
      summary: 'Categories Add',
      description: 'Endpoint for Categories',
      consumes: ['multipart/form-data'],
      parameters: [
        {
          name: 'categoryName',
          in: 'formData',
          description: 'Category Name',
          required: true,
          type: 'string'
        },
        {
          name: 'categoryDescription',
          in: 'formData',
          description: 'Category Description',
          required: true,
          type: 'string'
        },
        {
          name: 'type',
          in: 'formData',
          description: 'Image Folder Name',
          required: true,
          type: 'string'
        },
        {
          name: 'image',
          in: 'formData',
          description: 'Category Image',
          required: true,
          type: 'file'
        },
        {
          name: 'x-authtoken',
          type: 'string',
          in: 'header',
          required: true,
          value: ''
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
          description: 'Success response for Categories.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  data: { type: 'string' }
                }
              }
            }
          }
        },
        400: {
          description: 'Failure response for Categories.',
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
  