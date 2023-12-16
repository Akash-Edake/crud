const Records = require("../model/fiveThousandRecords");
const axios = require("axios");
exports.findAll = async (req, res) => {
  try {
    const allRecords = await Records.find({})
      .skip(0)
      .limit(100)
      .sort({ title: 1 });
    res.status(200).send(allRecords);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.pagination = async (req, res) => {
  const { body } = req;
  const page = body.pageNo - 1;
  const perPage = body.perPage;
  const sortBy = { [body.sortBy]: body.order == "asc" ? 1 : -1 } || {
    title: 1,
  };

  try {
    const totalRecords = await Records.find().countDocuments();
    const records = await Records.find({})
      .skip(page * perPage)
      .limit(body.perPage)
      .sort(sortBy);

    res.status(200).send({ totalRecords, records });
  } catch (e) {
    res.status(400).send(e);
  }
};
exports.add = async (req, res) => {
  let newRecord = new Records(req.body);
  try {
    await newRecord.save();
    res.status(200).send(newRecord);
  } catch (e) {
    res.status(400).send(e);
  }
};
exports.deleteReconds = async (req, res) => {
  const { body } = req;
  try {
    const remainingRecords = await Records.findByIdAndDelete(body._id);
    res.status(200).send(remainingRecords);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.updateRecords = async (req, res) => {
  const { body } = req;
  const obj = { ...body };
  delete obj._id;
  try {
    const updeted = await Records.findByIdAndUpdate({ _id: body._id }, obj, {
      new: true,
      upsert: true,
    });
    res.status(201).send(updeted);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.weather = async (req, res) => {
  const { body } = req;
  const url = `http://api.weatherstack.com/current?access_key=07540ffc77eb9695997ccfeb0a35662c&query=${body.city}`;
  try {
    const currentWeather = await axios.get(url);
    res.send(currentWeather.data);
  } catch (e) {
    res.status(400).send(e);
  }
};
