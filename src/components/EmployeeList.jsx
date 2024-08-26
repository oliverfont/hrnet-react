import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { EmployeeContext } from '../store/EmployeeContext';
import '../App.css';

const EmployeeList = () => {
    // Récupère la liste des employés du contexte
    const { employees } = useContext(EmployeeContext);
    
    // État pour gérer la recherche de l'utilisateur
    const [search, setSearch] = useState('');

    // Mémorise la liste des employés filtrés en fonction de la recherche
    const filteredEmployees = useMemo(() => {
        // Sépare les termes de recherche et crée une expression régulière pour faire correspondre les résultats
        const searchTerms = search.split(' ').filter(term => term);
        const regex = new RegExp(searchTerms.join('|'), 'i'); // Combine les termes avec 'ou' logique (|) et insensible à la casse
        
        // Filtre les employés en fonction des termes de recherche dans différents champs
        return employees.filter((employee) => 
            regex.test(employee.firstName) ||
            regex.test(employee.lastName) ||
            regex.test(employee.department) ||
            regex.test(employee.street) ||
            regex.test(employee.city) ||
            regex.test(employee.state) ||
            regex.test(employee.zipCode) ||
            regex.test(new Date(employee.dateOfBirth).toLocaleDateString()) ||
            regex.test(new Date(employee.startDate).toLocaleDateString())
        );
    }, [employees, search]); // Dépend de la liste des employés et de la recherche

    // Colonnes du tableau des employés avec tri activé
    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => new Date(row.startDate).toLocaleDateString(), sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => new Date(row.dateOfBirth).toLocaleDateString(), sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
    ];

    // Composant d'en-tête supplémentaire pour la recherche
    const subHeaderComponent = (
        <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Mets à jour l'état de recherche à chaque saisie
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />
    );

    return (
        <div className="container-employees">
            <h1>Current Employees</h1>
            {/* Composant DataTable pour afficher la liste des employés */}
            <DataTable
                columns={columns}            // Définit les colonnes
                data={filteredEmployees}      // Passe les employés filtrés en tant que données
                pagination                    // Active la pagination
                subHeader                     // Active l'en-tête secondaire
                subHeaderComponent={subHeaderComponent} // Ajoute l'input de recherche dans l'en-tête
            />
            <Link to="/">Home</Link> {/* Lien vers la page d'accueil */}
        </div>
    );
};

export default EmployeeList;
