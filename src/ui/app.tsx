import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Import the generated route tree

const memoryHistory = createMemoryHistory({
  initialEntries: ["/tokens"],
});

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  history: memoryHistory,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
