import React, { createContext, useState, useEffect } from "react";

// Criando o contexto
export const ChildNameContext = createContext();

// Componente provedor
export const ChildNameProvider = ({ children }) => {
  const [childName, setChildName] = useState(() => {
    // Verifica se há um nome salvo no localStorage ao inicializar
    return localStorage.getItem("childName") || "";
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que o nome mudar
    localStorage.setItem("childName", childName);
  }, [childName]);

  return (
    <ChildNameContext.Provider value={{ childName, setChildName }}>
      {children}
    </ChildNameContext.Provider>
  );
};
