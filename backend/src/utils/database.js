import mongoose from 'mongoose'

const URI = 'mongodb+srv://fantasmafake4152:yDcDMLEHOzk4w756@cluster0.2cbb4gr.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection