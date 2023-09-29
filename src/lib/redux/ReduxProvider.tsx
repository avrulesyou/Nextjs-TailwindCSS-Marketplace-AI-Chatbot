"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { store } from "./store";
export const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
