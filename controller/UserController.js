import users from "../model/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await users.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await users.create(req.body);
    res.status(200).json({ msg: "User Created" });
  } catch (error) {
    console.error(error.message);
  }
};
