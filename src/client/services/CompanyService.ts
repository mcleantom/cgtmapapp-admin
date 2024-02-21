/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCreate } from '../models/CompanyCreate';
import type { CompanyInDB } from '../models/CompanyInDB';
import type { CompanyUpdate } from '../models/CompanyUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompanyService {

    /**
     * Create Company
     * @returns CompanyInDB Successful Response
     * @throws ApiError
     */
    public static createCompanyCompanyPost({
        requestBody,
    }: {
        requestBody: CompanyCreate,
    }): CancelablePromise<CompanyInDB> {
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
     * Read Companies
     * @returns CompanyInDB Successful Response
     * @throws ApiError
     */
    public static readCompaniesCompanyGet({
        skip,
        limit = 10,
    }: {
        skip?: number,
        limit?: number,
    }): CancelablePromise<Array<CompanyInDB>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/company',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Company
     * @returns CompanyInDB Successful Response
     * @throws ApiError
     */
    public static updateCompanyCompanyCompanyIdPut({
        companyId,
        requestBody,
    }: {
        companyId: number,
        requestBody: CompanyUpdate,
    }): CancelablePromise<CompanyInDB> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/company/{company_id}',
            path: {
                'company_id': companyId,
            },
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
        companyId: number,
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
