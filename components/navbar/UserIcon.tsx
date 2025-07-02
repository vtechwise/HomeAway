import { fetchUserImage } from "@/utils/action";
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
  const profileImage = await fetchUserImage();
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="user Profile"
        className="w-6 h-6 rounded-full"
      />
    );
  }
  return <LuUser className="h-6 w-6 rounded-full bg-primary" />;
};
export default UserIcon;
