import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { fetchProfile, updateProfileAction } from "@/utils/action";

async function ProfilePage() {
  const profile = await fetchProfile();
  return (
    <section>
      <h2 className="text-2xl mb-8 font-semibold">New User</h2>
      <div className="rounded-md border p-8 max-w-2xl">
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 ">
            <FormInput
              name="firstName"
              label="first name"
              defaultValue={profile.firstName}
              type="text"
            />
            <FormInput
              name="lastName"
              label="last name"
              type="text"
              defaultValue={profile.lastName}
            />
            <FormInput
              name="username"
              label="username"
              type="text"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update profile" className="mt-8 cursor-pointer" />
        </FormContainer>
      </div>
    </section>
  );
}
export default ProfilePage;
