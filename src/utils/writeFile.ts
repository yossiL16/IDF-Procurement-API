import fs from 'fs/promises'

export async function writeFile(location : string, data : any) {
    await fs.writeFile(location, data)
    return{msg: "Updated successfully"}
}