import {config} from 'dotenv'

config()

export const port = process.env.DB_PORT || 3006
export const host = process.env.DB_HOST || 'localhost'
export const user = process.env.DB_USER || 'root'
export const password = process.env.DB_PASSWORD || ''
export const database = process.env.DB_NAME || 'companydb'