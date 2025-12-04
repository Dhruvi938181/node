const user = require("../usermodel/usermodel");

const register = async (req, res) => {
  const data = await user.create(req.body);
  res.send(data);
};

const get = async (req, res) => {
  const data = await user.find({});
  res.send(data);
};
const deleteData = async (req, res) => {
  const data = await user.findByIdAndDelete(req.params.id);
  res.send("deleted");
};
const editData = async (req, res) => {
  const data = await user.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
};

module.exports = { register, get, deleteData, editData };
