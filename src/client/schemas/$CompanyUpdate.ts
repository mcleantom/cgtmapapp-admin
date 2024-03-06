/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyUpdate = {
    properties: {
        name: {
            type: 'any-of',
            contains: [{
                type: 'string',
            }, {
                type: 'null',
            }],
        },
        position: {
            type: 'any-of',
            contains: [{
                type: 'Point',
            }, {
                type: 'null',
            }],
        },
        category: {
            type: 'any-of',
            contains: [{
                type: 'ECompanyCategory',
            }, {
                type: 'null',
            }],
        },
        description: {
            type: 'any-of',
            contains: [{
                type: 'string',
            }, {
                type: 'null',
            }],
        },
        website: {
            type: 'any-of',
            contains: [{
                type: 'string',
                format: 'uri',
                maxLength: 2083,
                minLength: 1,
            }, {
                type: 'null',
            }],
        },
        logo: {
            type: 'any-of',
            contains: [{
                type: 'string',
                format: 'uri',
                maxLength: 2083,
                minLength: 1,
            }, {
                type: 'null',
            }],
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
        },
    },
} as const;
