import fs from 'fs'

export const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./seatData.json", (err, data) => {
            if (err) reject(err)
            else {
                resolve(JSON.parse(data.toString()))  // Wenn das Lesen erfolgreich ist, wird der Inhalt der Datei geparst und als JSON-Objekt zurückgegeben
            }
        })

    })
}