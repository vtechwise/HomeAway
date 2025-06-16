import Link from "next/link";
import { Button } from "../ui/button";
import { LuTent } from "react-icons/lu";

const Logo = () => {
  return (
    <Button asChild>
      <Link href={"/"}>
        <LuTent />
      </Link>
    </Button>
  );
};
export default Logo;
