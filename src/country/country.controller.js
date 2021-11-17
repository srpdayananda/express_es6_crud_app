import Country from "./country.model";

export default {
  async create(req, res) {
    try {
      const countryFound = await Country.findOne(req.body);
      if (countryFound) {
        return res.status(500).send("Country with name is already exit");
      }
      const createdUser = await Country.create(req.body);
      return res.send(createdUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async get(req, res) {
    try {
      const getCountry = await Country.find();
      return res.send(getCountry);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const deletedCountry = await Country.deleteOne({ _id: req.query._id });
      return res.send(deletedCountry);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const newValue = {
      name: req.body.name,
      code: req.body.code,
    };
    try {
      const updatedCountry = await Country.updateOne(query, newValue);
      return res.send(updatedCountry);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
