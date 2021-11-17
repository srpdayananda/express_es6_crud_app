import User from "./user.model";

export default {
  async create(req, res) {
    try {
      const foundUser = await User.findOne({ email: req.body.email });
      if (foundUser) {
        return res
          .status(500)
          .send({ error: "User with email in already exit" });
      }
      const createdUser = await User.create(req.body);
      return res.send(createdUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async get(req, res) {
    try {
      const getUser = await User.find();
      return res.send(getUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const deletedUser = await User.deleteOne({ _id: req.query._id });
      return res.send(deletedUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async update(req, res) {
    const query = { _id: req.body._id };
    const newValue = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
    };
    try {
      const userUpdated = await User.updateOne(query, newValue);
      return res.send(userUpdated);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
