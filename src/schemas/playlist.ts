import { model, Schema } from "mongoose";

const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  videos: [{ type: Schema.Types.ObjectId, ref: "video" }],
  created_on: {
    type: Date,
    default: Date.now
  }
});

export const PlaylistSchemas = model("playlist", PlaylistSchema);
