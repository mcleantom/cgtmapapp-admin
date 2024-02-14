/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyResponse } from '../models/CompanyResponse';
import type { CreateCompanyRequest } from '../models/CreateCompanyRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompanyService {

    /**
     * Get Companies
     * @returns CompanyResponse Successful Response
     * @throws ApiError
     */
    public static getCompaniesCompanyGet(): CancelablePromise<Array<CompanyResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/company',
        });
    }

    /**
     * Create Company
     * @returns CompanyResponse Successful Response
     * @throws ApiError
     */
    public static createCompanyCompanyPost({
        requestBody,
    }: {
        requestBody: CreateCompanyRequest,
    }): CancelablePromise<CompanyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/company',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Company
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCompanyCompanyCompanyIdDelete({
        companyId,
    }: {
        companyId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/company/{company_id}',
            path: {
                'company_id': companyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
