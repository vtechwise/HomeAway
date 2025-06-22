import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;

  console.log(firstName);
};

const CreateProfilePage = () => {
  return (
    <section>
      <h2 className="text-2xl mb-8 font-semibold">New User</h2>
      <div className="rounded-md border p-8 max-w-xl">
        <form action={createProfileAction}>
          <div>
            <Label htmlFor="firstName">first name</Label>
            <Input type="text" id="firstName" name="firstName" />
          </div>
          <Button size={"lg"} type="submit">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfilePage;
