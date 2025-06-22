import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("you have been logged out successfully");
  };
  return (
    <SignOutButton redirectUrl="/">
      <Button className="w-full text-left" onClick={handleLogout}>
        Sign Out
      </Button>
    </SignOutButton>
  );
};
export default SignOutLink;
