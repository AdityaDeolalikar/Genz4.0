import { User } from "../models/user.model.mjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send({
        message: "User already exists with this email",
        success: false,
      });
    }
    await User.create({ name, email, password });
    res.status(200).send({
      message: "Account Created",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "Incorrect email or password",
        success: false,
      });
    }
    if (user.password !== password) {
      return res.status(400).send({
        message: "Incorrect email or password",
        success: false,
      });
    }
    return res
      .status(200)
      .send({ message: "Welome Back", success: true, user: user });
  } catch (error) {
    console.log(error);
  }
};

export const addPoints = async (req, res) => {
  try {
    const { email, points } = req.body;

    if (!email || !points) {
      return res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }

    await User.updateOne(
      { email },
      {
        rewardPoints: Number(user.rewardPoints) + points,
        todayPoints: Number(user.todayPoints) + points,
      }
    );
    return res.status(200).send({
      message: "Points Added",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const redeemPoints = async (req, res) => {
  try {
    const { email, points } = req.body;
    if (!email || !points) {
      return res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }
    if (user.rewardPoints < points) {
      return res.status(400).send({
        message: "Not enough points",
        success: false,
      });
    }
    await User.updateOne(
      { email },
      { rewardPoints: user.rewardPoints - points }
    );
    return res.status(200).send({
      message: "Points Redeemed",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPoints = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Points fetched",
      success: true,
      points: user.rewardPoints || 0,
      todayPoints: user.todayPoints || 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).send({
      message: "Users fetched",
      success: true,
      users: users || [],
    });
  } catch (error) {
    console.log(error);
  }
};
