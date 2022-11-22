const port = 3300;
const app = require("./app.js");

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
