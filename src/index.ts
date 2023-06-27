import "reflect-metadata"
import app from "./app"
import { AppDataSource } from "./db"


try {
    AppDataSource.initialize()
    console.log('se conecto correctamente')
} catch (error) {
    console.log(error)
}

const PORT = process.env.PORT || 8080

app.listen(PORT,()=> console.log('Conectado desde el puerto  '+ PORT))