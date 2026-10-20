import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "@/app/appStore.ts";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import AuthInitializer from "@/app/providers/AuthInitializer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthInitializer>
        <BaseLayout />
      </AuthInitializer>
    </Provider>
  </StrictMode>,
);
