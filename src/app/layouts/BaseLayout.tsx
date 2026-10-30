import "@/app/styles/normalize.css";
import "@/app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router/router.tsx";

function BaseLayout() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default BaseLayout;
