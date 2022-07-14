module.exports = {
    put: {
      tags: ['Categories'],
      summary: 'Category Update',
      description: 'Endpoint for category update',
      consumes: ['multipart/form-data'],
      procedures: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Category ID',
          required: true
        },
        {
          name: 'categoryName',
          in: 'formData',
          description: 'Category Name',
          type: 'string'
        },
        {
          name: 'categoryDescription',
          in: 'formData',
          description: 'Category Description',
          type: 'string'
        },
        {
          name: 'type',
          in: 'formData',
          description: 'Image Folder Name',
          type: 'string'
        },
        {
          name: 'image',
          in: 'formData',
          description: 'Category Image',
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
          description: 'Category Updated.',
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
  