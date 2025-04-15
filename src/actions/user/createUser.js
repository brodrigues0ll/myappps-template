"use server";

import User from "../../models/User";
import connect from "@/lib/db";

export const createUser = async (data) => {
  const { name, surname, email, password } = data;

  await connect();

  const user = new User({
    name,
    surname,
    email,
    password,
  });

  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    console.error(err);
  }
};
