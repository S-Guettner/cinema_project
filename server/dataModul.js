import mongoose from "mongoose"


const dataSchema = mongoose.Schema(
    {
        seatNumber: {
            type: Number,
            require: [true, "seatNumber needed"]
        },

        seatBooked: {
            type: Boolean,
            require: [true, "booked status needed"],
            default: false
        },

        seatPrice: {
            type:Number,
            require: [true, "price needed"],
        }
    },

    {
        timestamps: true
    }
)

const seatSchema = mongoose.model('seat' , dataSchema)

export default seatSchema


