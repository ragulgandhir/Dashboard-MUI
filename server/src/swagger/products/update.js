module.exports = {
    put: {
      tags: ['Products'],
      summary: 'Product Update',
      description: 'Endpoint for product update',
      consumes: ['multipart/form-data'],
      procedures: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Product ID',
          required: true
        },
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
          type: 'string'
        },
        {
          name: 'productDescription',
          in: 'formData',
          description: 'Product Description',
          type: 'string'
        },
        {
          name: 'originalPrice',
          in: 'formData',
          description: 'Original Price',
          type: 'decimal'
        },
        {
          name: 'sellingPrice',
          in: 'formData',
          description: 'Selling Price',
          type: 'decimal'
        },
        {
          name: 'stock',
          in: 'formData',
          description: 'Stock',
          type: 'number'
        },
        {
          name: 'type',
          in: 'formData',
          description: 'Folder Name',
          type: 'string'
        },
        {
          name: 'image',
          in: 'formData',
          description: 'Product Image',
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
          description: 'Product Updated.',
          schema: {
            properties: {
              code: { type: 'number' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {
                  Product: { type: 'object' }
                }
              }
            }
          }
        },
        400: {
          description: 'Error response for Product details.',
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
  