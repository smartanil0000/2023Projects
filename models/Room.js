import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: {
      type: [{ number: Number,unavailableDates: { type: [Date] } }],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("room", RoomSchema);
