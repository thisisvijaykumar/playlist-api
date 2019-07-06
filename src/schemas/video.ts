import {model,Schema} from "mongoose";

const VideoSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    thumbnail_url:{
        type:String
    },
    video_url:{
        type:String,
        required:true
    },
    created_on:{
        type:Date,
        default:Date.now
    }
});

export const VideoSchemas=model("video",VideoSchema);