import { create } from 'zustand';

const useEmployeeStore = create((set) => ({
    employees: [],
    addEmployee: (employee) => set((state) => ({
        employees: [...state.employees, employee]
    })),
}));

export default useEmployeeStore;
