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
    },

    startDate: Date,
    endDate: Date,

    budget: Number,
    travelers: Number,

    mood: {
      type: String,
      default: "adventure",
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