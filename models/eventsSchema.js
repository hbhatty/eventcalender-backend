import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    orgName:{
        type: String,
        required: true,
    },
    eventName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    start:{
        type: String,
        required: true,
    },
    end:{
        type: String,
        required: true,
    },
    location: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postal: {
            type:String,
            required: true,
        },
    },
    url:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
})

const EventsModel = new mongoose.model("Event", eventsSchema);

export default EventsModel;