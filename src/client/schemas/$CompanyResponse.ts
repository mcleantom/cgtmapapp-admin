/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyResponse = {
    properties: {
        _id: {
            type: 'string',
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        position: {
            type: 'Point',
            isRequired: true,
        },
        category: {
            type: 'ECompanyCategory',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        website: {
            type: 'string',
            isRequired: true,
            format: 'uri',
            maxLength: 2083,
            minLength: 1,
        },
        logo: {
            type: 'string',
            isRequired: true,
            format: 'uri',
            maxLength: 2083,
            minLength: 1,
        },
    },
} as const;
