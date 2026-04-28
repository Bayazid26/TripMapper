import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: Date,
    endDate: Date,

    budget: {
      type: Number,
      default: 0,
    },

    travelers: {
      type: Number,
      default: 1,
    },

    mood: {
      type: String,
      default: "adventure",
    },

    // 🗺️ MAP SUPPORT (IMPORTANT)
    lat: {
      type: Number,
      required: false,
    },

    lng: {
      type: Number,
      required: false,
    },

    itinerary: [
      {
        day: Number,
        activities: [
          {
            time: String,
            title: String,
            location: String,
            description: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);