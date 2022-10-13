import { createContext, useState } from "react";

export const TarjetasContext = createContext({
  tarjetas: [],
  setTarjetas: () => {}
})

export const TarjetasProvider = ({ children }) => {
  const [tarjetas, setTarjetas] = useState([]);
  const value = { tarjetas, setTarjetas };

  return <TarjetasContext.Provider value={value}>{children}</TarjetasContext.Provider>;
}