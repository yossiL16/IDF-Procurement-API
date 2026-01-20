import fs from 'fs/promises'

export async function readFile(location : string) {
    return JSON.parse(await fs.readFile(location, 'utf-8'))
}