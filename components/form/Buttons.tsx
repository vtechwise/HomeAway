"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { TbReload } from "react-icons/tb";

// import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitButtonProps = {
  text?: string;
  className?: string;
};

export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`capitalize ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <TbReload className="h-4 w-4 animate-spin mr-2" />
          Please Wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
