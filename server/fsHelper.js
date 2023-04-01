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

export const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        // Schreibt die Daten in die Datei ./posts.json
        fs.writeFile("./seatData.json", JSON.stringify(data, null, 2), (err) => {
            if (err) reject(err)
            else {
                resolve("DateneGeschrieben")  // Wenn das Schreiben erfolgreich ist, wird ein Erfolgsversprechen zurückgegeben
            }
        })
    })
}





export const appendFile = (newPost) => {
    return new Promise((resolve, reject) => {
        // Liest die aktuelle Datei ein
        readFile()
            .then(oldPosts => {
                // Erstellt ein neues Array, indem die alten Daten kopiert und die neuen Daten hinzugefügt werden
                const newData = [...oldPosts, newPost]
                // Schreibt die neuen Daten in die Datei
                writeFile(newData)
                    .then(res => resolve(newData))  // Wenn das Schreiben erfolgreich ist, wird das neue Datenarray zurückgegeben
                    .catch(err => reject(err))
            })
            .catch(err => reject(err))
    })
}
