import mongoose from "mongoose";

const applicationSchema=new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status:{
        type: String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending',
    }
}, {timeseries: true});    //(timestamps) - mongoose add two types of date --> createdAt, updatedAt to our monogoDB schema
export const Application=mongoose.model("Application", applicationSchema);