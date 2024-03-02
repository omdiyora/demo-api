const data = [
  { email: "testing@gmail.com", name: "Testing" },
  { email: "testing@gmail.com", name: "Testing" },
  { email: "testing@gmail.com", name: "Testing" },
  { email: "testing@gmail.com", name: "Testing" },
];

module.exports.getUser = (req, res) => {
  try {
    res.json({
      message: "Data Fetch Successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
