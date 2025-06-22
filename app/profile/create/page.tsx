import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

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
          <FormInput type="text" name="firstName" />
          <Button size={"lg"} type="submit">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfilePage;
