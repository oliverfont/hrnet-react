import React, { createContext, useState } from 'react';

// Création du contexte pour les employés
export const EmployeeContext = createContext();

// Composant fournisseur qui encapsule les composants enfants
export const EmployeeProvider = ({ children }) => {
    // État pour stocker la liste des employés
    const [employees, setEmployees] = useState([]);

    // Fonction pour ajouter un nouvel employé à la liste existante
    const addEmployee = (employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, employee]);
    };

    return (
        // Fournit la liste des employés et la fonction addEmployee aux composants enfants
        <EmployeeContext.Provider value={{ employees, addEmployee }}>
            {children} {/* Composants enfants encapsulés dans le contexte */}
        </EmployeeContext.Provider>
    );
};
