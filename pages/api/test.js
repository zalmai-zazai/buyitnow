// import { createRouter } from "next-connect";

// const router = createRouter();

// router.get((req, res) => {
//   res.send("Hello from Next-Connect!");
// });

// export default router;

import { createRouter } from "next-connect";

// Create the router
const router = createRouter();

// Define the route handlers
router.get((req, res) => {
  res.send("Hello from Next-Connect!");
});

// Export the handler function
export default function handler(req, res) {
  return router.run(req, res); // Ensure that the router runs
}
