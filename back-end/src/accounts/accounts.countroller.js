const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./accounts.service");

//return account info according the email address
async function list(req, res, next) {
  const { email } = req.query;
  if (email) {
    let data = await service.read(email);
    return data
      ? res.status(200).json({ data: data })
      : next({
          status: 404,
          message: `${email} is not exist.`,
        });
  }
  let data = await service.list();
  res.json({ data });
}

async function accountExist(req, res, next) {
  const { email } = req.query;
  let data = await service.read(email);
  if (data) {
    res.locals.account = data;
    return next();
  }
  next({
    status: 404,
    message: `${email} is not exist.`,
  });
}
async function read(req, res) {
  let { account: data } = res.locals;
  res.status(200).json({ data });
}
//verify email exist or not before create
async function hasOnlyValidEmail(req, res, next) {
  console.log("this is req body", req.body);
  const { data = { email } } = req.body;
  console.log("this is email", data.email);
  const account = await service.read(data.email);
  return account
    ? next({
        status: 404,
        message: `${data.email} is already exist.`,
      })
    : ((res.locals.account = account), next());
}
async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data: data });
}

async function update(req, res, next) {}

module.exports = {
  list,
  create: [asyncErrorBoundary(hasOnlyValidEmail), create],
  read: [asyncErrorBoundary(accountExist), read],
  update,
};
