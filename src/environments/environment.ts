import { Environment } from "./environment.interface";

export const environment: Environment = {
    production: false,
    name: 'dev',
    apiPath: 'HTTP://localhost:8080/',
    version: require('../../package.json').version
}