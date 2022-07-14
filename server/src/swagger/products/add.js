
module.exports = {
    post: {
      tags: ['Products'],
      summary: 'Product Add',
      description: 'Endpoint for Products',
      consumes: ['multipart/form-data'],
      parameters: [
        {
          name: 'categoryId',
          in: 'formData',
          description: 'Category Id',
          required: true,
          type: 'string'
        },
        {
          name: 'productName',
          in: 'formData',
          description: 'Product Name',
          required: true,
          type: 'string'
        },
        {
          name: 'productDescription',
          in: 'formData',
          description: 'Product Description',
          required: true,
          type: 'string'
        },
        {
          name: 'originalPrice',
          in: 'formData',
          description: 'Original Price',
          required: true,
          type: 'number',
          multipleOf: 0.01
        },
        {
          name: 'sellingPrice',
          in: 'formData',
          description: 'Selling Price',
          required: true,
          type: 'number',
          multipleOf: 0.01 
        },
        {
          name: 'stock',
          in: 'formData',
          description: 'Stock',
          required: true,
          type: 'number'
        },
        {
          name: 'color',
          in: 'formData',
          description: 'Variant Color',
          required: true,
          type: 'array', 
          items: {
            type: 'string'
          }
        },
        {
          name: 'price',
          in: 'formData',
          description: 'Variant Price',
          required: true,
          type: 'array', 
          items: {
            type: 'number',
            multipleOf: 0.01
          }
        },
        {
          name: 'type',
          in: 'formData',
          description: 'Folder Name',
          required: true,
          type: 'string'
        },
        {
          name: 'image',
          in: 'formData',
          description: 'Product Image',
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
          description: 'Success response for Products.',
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
          description: 'Failure response for Products.',
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
  