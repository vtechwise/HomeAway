"use server";
// import db from "./db";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { profileScheme } from "./schemes";
import db from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Please login to access this route");
  }
  if (!user.privateMetadata.hasProfile) {
    redirect("/profile/create");
  }
  return user;
};

const renderError = (error: unknown) => {
  if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: "An error occurred" };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  console.log(user);

  if (!user) throw new Error("Please login ");

  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = profileScheme.parse(rawData);
    await db.profile.create({
      data: {
        clerkId: user?.id,
        profileImage: user.imageUrl ?? "",
        email: user.emailAddresses[0].emailAddress,
        ...validatedData,
      },
    });
    (await clerkClient()).users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    console.log(validatedData);
    // return { message: "profile created successfully" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "there was an error",
    };
  }
  return redirect("/");
};

export const fetchUserImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};
// fetch profile
export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) {
    redirect("profile/create");
  }
  return profile;
};

// update profile

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const formmattedData = profileScheme.parse(rawData);
    const user = await getAuthUser();
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: formmattedData,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
  return { message: "testing" };
};
