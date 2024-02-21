/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ECompanyCategory } from './ECompanyCategory';
import type { Point } from './Point';

export type CompanyCreate = {
    name: string;
    position: Point;
    category: ECompanyCategory;
    description: string;
    website: string;
    logo: string;
};

