"use server";

import { profileScheme } from "./schemes";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = profileScheme.parse(rawData);
    console.log(validatedData);
    return { message: "profile created successfully" };
  } catch (error) {
    return { message: "there was an error" };
  }
};
