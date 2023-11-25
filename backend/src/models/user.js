import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    produto: { type: String, required: true, unique: true},
    valor: { type: Number, required: true},
    quantidade: {type: Number, required:true}
})

export default mongoose.models.User || mongoose.model('User', UserSchema)