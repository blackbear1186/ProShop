/*
  1. This file is not connected the server it is seperate
  2. Import mongoose, dotenv, colors
  3. Import users, products, User, Product, Order, connectDB
  4. Set dotenv.config(), connectDB
  5. Set const importData async function->try, catch
  6. Await Delete all data from Order, Product, User data in mongoDB -> importData()
  7. Make createdUsers equal await insert multiple docs to user
  8. Make adminUser equal createdUser[0]._id who is the
  9. Iterate through products and add adminUser each time store in sampleProducts
  10. Await insertMany sampleProducts to Product
  11. Console log-> green and inverse ->process.exit()
  12. Set console.error()-> red and inverse -> process.exit(1)
  13. Create destroyData function from importData function
  14. Delete createdUsers, sampleProduct, adminUser, Product.insertmany
  15. Make console log red inverse and change to imported to destroyed
  16. Make process.argv[] if statement to destroy data or import data
  17. Go to root package.json add under 'dev'-> 'data:import': 'node backend/seeder'
  18. Add 'data:destroy': 'node backend/seeder -d'
  19. Type in 'npm run data:import'
*/

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()

  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()

  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData()
}
else {
  importData()
}