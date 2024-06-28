import { Environment } from "./environment.interface";

export const environment: Environment = {
    production: true,
    name: 'prod',
    apiPath: '',
    version: require('../../package.json').version
}