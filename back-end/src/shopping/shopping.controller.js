const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./shopping.service");

//return reservation according to required mobile_number or date
async function list(req, res) {}
//read specific reservation through the reservation_id
async function read(req, res) {}

async function create(req, res, next) {}

async function update(req, res, next) {}

module.exports = {
  list,
  create,
  read,
  update,
};
