import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const apiUrl = publicRuntimeConfig.apiUrl;