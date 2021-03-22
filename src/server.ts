import express, {Express} from 'express'
import providerRoutes from './routes/providerRoutes'

const app: Express = express()

app.use(express.json())

app.use('/api/providers', providerRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))