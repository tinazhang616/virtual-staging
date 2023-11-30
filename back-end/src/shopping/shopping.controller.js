const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./shopping.service");

//return reservation according to required mobile_number or date
async function list(req, res) {
  let data = await service.list();
  res.json({ data });
}
//read specific reservation through the reservation_id
async function read(req, res) {}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data: data });
}

async function update(req, res, next) {}

module.exports = {
  list,
  create,
  read,
  update,
};
