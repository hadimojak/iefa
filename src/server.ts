import app from "./app";

const PORT = process.env.PORT || 4000;
console.log({ port: process.env.PORT });

app.listen(PORT, () => {
  console.log("server is running");
});
