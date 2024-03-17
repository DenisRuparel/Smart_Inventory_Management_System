import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
  {
    serial_number: {
        type: String,
        required: [true, "Please add a serial number"],
        unique: true,
    },

    name: {
      type: String,
      required: [true, "Please add a name"],
    },

    type: {
      type: String,
      required: [true, "Please add a type"],
    },

    equipment_status: {
        type: String,
        required: [true, "Please add a Status"],
        default: "working",
    },

    description: {
        type: String,
        maxLength: [250, "Description must not be more than 250 characters"],
        default: "description",
    },

    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Equipment", equipmentSchema);