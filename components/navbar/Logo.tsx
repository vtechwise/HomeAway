import Link from "next/link";
import { Button } from "../ui/button";
import { LuTent } from "react-icons/lu";

const Logo = () => {
  return (
    <Button asChild size={"icon"}>
      <Link href={"/"}>
        <LuTent className="w-6 h-6" />
      </Link>
    </Button>
  );
};
export default Logo;
