import { connectToDatabase } from "@/db";
import Users from "@/models/users.model";

const checkAndUpdatePlanExpiry = async () => {
  await connectToDatabase();
  const currentDate = new Date();
  const users = await Users.find({ planExpiry: { $lte: currentDate } });

  for (let user of users) {
    // Reset user's plan to default state
    user.planExpiry = null;
    user.creator_mode = false;
    // Add any other logic to reset the plan

    await user.save();
    console.log(
      `Plan expired for user ${user.username}. Plan reset to default.`
    );
  }
};

export default checkAndUpdatePlanExpiry;
