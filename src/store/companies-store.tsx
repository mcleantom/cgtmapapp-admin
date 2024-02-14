import { create } from "zustand";

import { CreateCompanyRequest, CompanyResponse, CompanyService } from "../client";

interface CompanyStore {
    companies: CompanyResponse[];
    getCompanies: () => Promise<void>;
    addCompany: (item: CreateCompanyRequest) => Promise<void>;
    deleteCompany: (id: string) => Promise<void>;
}

export const useCompaniesStore = create<CompanyStore>((set) => ({
    companies: [],
    getCompanies: async () => {
        const companies = await CompanyService.getCompaniesCompanyGet();
        set({ companies: companies });
    },
    addCompany: async (item: CreateCompanyRequest) => {
        const company = await CompanyService.createCompanyCompanyPost({requestBody: item});
        set((state) => ({ companies: [...state.companies, company]}))
    },
    deleteCompany: async (id: string) => {
        await CompanyService.deleteCompanyCompanyCompanyIdDelete({companyId: id});
        set((state) => ({ companies: state.companies.filter((company) => company._id !== id) }));
    }
}));