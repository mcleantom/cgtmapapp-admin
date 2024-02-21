import { create } from "zustand";

import { CompanyCreate, CompanyInDB, CompanyService, CompanyUpdate } from "../client";

interface CompanyStore {
    companies: CompanyInDB[];
    getCompanies: () => Promise<void>;
    addCompany: (item: CompanyCreate) => Promise<void>;
    deleteCompany: (id: number) => Promise<void>;
    updateCompany: (id: number, item: CompanyUpdate) => Promise<void>;
}

export const useCompaniesStore = create<CompanyStore>((set) => ({
    companies: [],
    getCompanies: async () => {
        const companies = await CompanyService.readCompaniesCompanyGet({skip: 0, limit:100});
        set({ companies: companies });
    },
    addCompany: async (item: CompanyCreate) => {
        const company = await CompanyService.createCompanyCompanyPost({requestBody: item});
        set((state) => ({ companies: [...state.companies, company]}))
    },
    deleteCompany: async (id: number) => {
        await CompanyService.deleteCompanyCompanyCompanyIdDelete({companyId: id});
        set((state) => ({ companies: state.companies.filter((company) => company.id !== id) }));
    },
    updateCompany: async (id: number, item: CompanyUpdate) => {
        const company = await CompanyService.updateCompanyCompanyCompanyIdPut({companyId: id, requestBody: item});
        set((state) => ({ companies: state.companies.map((c) => c.id === id ? company : c) }));
    },
}));