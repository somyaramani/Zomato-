import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    orderDetails: [
        {
            food: {type: mongoose.Types.ObjectId, ref: "Foods"},
            quantity: {type:String, required: true},
            paymode: {type: String, required: true},
            status: {type: String, default: "Placed"},
            paymentDetails: {
                itemsTotal : {type: Number, required: true},
                promo: {type: Number, required: true},
                tax:{type: Number, required: true}
            }
        }
    ],
    orderRatings: {
        type: Number,
        reuqired: true
    }
},
{
    timestamps: true
}
);

export const Ordermodel = mongoose.model("Orders", OrderSchema);
