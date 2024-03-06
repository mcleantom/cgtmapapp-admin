/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyInDB = {
    properties: {
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
        icon: {
            type: 'any-of',
            contains: [{
                type: 'string',
                format: 'uri',
                maxLength: 2083,
                minLength: 1,
            }, {
                type: 'null',
            }],
            isRequired: true,
        },
        banner_image: {
            type: 'any-of',
            contains: [{
                type: 'string',
                format: 'uri',
                maxLength: 2083,
                minLength: 1,
            }, {
                type: 'null',
            }],
            isRequired: true,
        },
        id: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
