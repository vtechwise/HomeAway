import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/action";

const CreateProfilePage = () => {
  return (
    <section>
      <h2 className="text-2xl mb-8 font-semibold">New User</h2>
      <div className="rounded-md border p-8 max-w-2xl">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 ">
            <FormInput name="firstName" label="first name" type="text" />
            <FormInput name="lastName" label="last name" type="text" />
            <FormInput name="username" label="username" type="text" />
          </div>
          <SubmitButton text="create profile" className="mt-8 cursor-pointer" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfilePage;
