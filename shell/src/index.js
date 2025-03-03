import("./bootstrap")
  .then(({ start }) => {
    start();
  })
  .catch((err) => {
    console.error("Error loading the application:", err);
  });
