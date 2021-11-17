import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        require: true
    },
    lastName: {
        type:String,
    }, 
    age:{
        type: Number,
    },
    email: {
        type:String,
    },
}
);

export default mongoose.model('User', userSchema);