import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    descript: {type: String, required: true},
    isVeg : {type: Boolean, required: true},
    isContainsEgg: {type: Boolean, required: true},
    category: {type: String, required: true},
    photos: {
        // Referencing schema/table
        //Primary key is used for linking purpose between different tables in dbms. This value has to be not null or unique.
        // Primary key when used inside a referencing schema, it will be called a foreign key.
        type: mongoose.Types.ObjectId,
        ref: "Images"  
    },
    price: {type: Number, default: 150, required:true},
    addOns: [
        {
            // Self referencing to table name food i.e. food schema only
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        }
    ],
    restaurant:{
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }
}
,
{
    timestamps: true
});

export const Foodmodel = mongoose.model("Foods",FoodSchema);