# Market API REST

## The API

This server side application is an API REST that is connected to a previously created MYSQL database, that allows us to obtain data about products, and their categories, and filter them by name, category, prices, and discounts.

## The technologies

This API was built with the express framework(Node JS, JavaScript), and some dependencies like mysql2 to create pool connections and queries, dotenv to protect the environment variables; morgan and nodemon for use in development. Also, this API was created as part of a challenge to function as the backend of a client developed only with Vanilla Js(Market-frontend). 

## Functionality

The app connects to the Mysql database creating a pool of connections, that allow us to be connected when some connection was ended for inactivity. I created models, controllers, and routes for Products and Categories(both tables were created previously in the database), to obtain the information from the database. Also, to prevent SQL injections was used prepared statements in queries.

## Development

To run in local, cloned this repository and create an env.file with the next variables:
- DB_HOST=your database host
- DB_NAME=your database name
- DB_USER=your database user
- DB_PASSWORD=your database password

Remember create after an mysql database with the next tables:
- Product {
  id: int
  name: varchar
  url_image: varchar
  price: float
  discount: int
  category: int
}

- Category {
  id: int
  name: varchar
}

Finally, execute npm run dev.

## Production

This API was deployed with Vercel: 
- https://market-backend-alxdrian.vercel.app/api/products
- https://market-backend-alxdrian.vercel.app/api/categories

## API Documentation

BASE_URL = https://market-backend-alxdrian.vercel.app/api/

## Products

### GET All Products

Obtain an object with a key "products" and a array of all the products as value.

```shell

GET https://market-backend-alxdrian.vercel.app/api/products

{  
  "products" : [
    ....
  ]
}

```

### GET Product By Id

Obtain an object with a key "product" and a object with the product as a value. The parameter :id is the product id.

```shell

GET https://market-backend-alxdrian.vercel.app/api/products/:id

{  
  "product" : {
    ....
  }
}

```

### GET Products By Filters

Obtain an object with a key "products" and a array of the filtered products as value.
The search doesn't depend of any param, if all are blank, obtain all the products.

- name : string that matchs with the name products
- category : integer that match with category products
- pricemin : filter prices higher than this param (int)
- pricemax : filter prices lower than this param (int)
- discountmax : filter discounts lower than this param (int)
- discountmin : filter discounts higher than this param (int)

```shell

GET https://market-backend-alxdrian.vercel.app/api/products/search?name=[:name]&category=[:category]&pricemin=[:pricemin]&pricemax=[:pricemax]&discountmax=[:discountmax]&discountmin=[:discountmin]

{  
  "products" : [
    ....
  ]
}

```

## Categories

### GET All Categories 

Obtain an object with a key "categories" and a array of all the categories as value.

```shell

GET https://market-backend-alxdrian.vercel.app/api/products

{  
  "categories" : [
    ....
  ]
}

```

