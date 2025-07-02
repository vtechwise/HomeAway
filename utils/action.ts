"use server";
// import db from "./db";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { profileScheme } from "./schemes";
import db from "./db";

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
    return { message: "profile created successfully" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "there was an error",
    };
  }
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
