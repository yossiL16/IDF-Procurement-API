import fs from 'fs/promises'

export async function writeFile(location : string, data : any) {
const strData = JSON.stringify(data)
    await fs.writeFile(location, strData)
    return{msg: "Updated successfully"}
}