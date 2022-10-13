import { createContext, useState } from "react";

export const DeletedContext = createContext({
  deleted: [],
  setDeletes: () => {}
})

export const DeletedProvider = ({ children }) => {
  const [deletes, setDeletes] = useState([]);
  const value = { deletes, setDeletes };

  return <DeletedContext.Provider value={value}>{children}</DeletedContext.Provider>;
}