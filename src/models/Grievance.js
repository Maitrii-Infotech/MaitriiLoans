import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    mobile: {
      type: String,
      required: [true, "Please provide a mobile number"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    loanNumber: {
      type: String,
    },
    issue: {
      type: String,
      required: [true, "Please describe your issue"],
    },
    complaintId: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "In Progress", "Resolved", "Closed"],
    },
  },
  { timestamps: true }
);

const Grievance =
  mongoose.models.Grievance || mongoose.model("Grievance", grievanceSchema);

export default Grievance;
