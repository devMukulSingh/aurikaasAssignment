'use client'
import { persistor } from "@/redux/store";
import { ReactNode } from "react"
import { PersistGate } from "redux-persist/integration/react";

const PersistProvider = ({children} : {children : ReactNode}) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

export default PersistProvider