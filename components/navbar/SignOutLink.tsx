import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("you have been logged out successfully");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left">Log Out</button>
    </SignOutButton>
  );
};
export default SignOutLink;
