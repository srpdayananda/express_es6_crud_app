import mongoose from 'mongoose';
const {Schema} = mongoose;

const countrySchema = new Schema({
    name:{
        type:String,
        require : true,
    }, 
    code:{
        type: String
    }
});

export default mongoose.model('Country', countrySchema);