db.createCollection("nonfiction", {
  validator: {
    $jsonSchema: {
      required: ['name', 'price', 'author'], 
      properties: {
        name: {
          bsonType: 'string',
          description: 'must be a string and required'
        },
        price: {
          bsonType: 'number',
          description: 'must be number and required'
        },
        author: {
          bsonType: 'string',
          description: 'must be a string and required'
        }
      }
    }
  },
  validationAction: 'error'
})
