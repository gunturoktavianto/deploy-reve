import User from "../models/user";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password,
  });

  res.status(201).json({
    user,
  });
};
