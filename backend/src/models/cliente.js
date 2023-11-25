import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    idade: { type: Number, required:true}
})

export default mongoose.models.Cliente || mongoose.model('Cliente', UserSchema)