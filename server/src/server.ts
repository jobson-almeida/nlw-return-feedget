import './config/module-alias'
import express from 'express'
import helmet from 'helmet'

import cors from 'cors'
import { routes } from './routes'

const app = express()
app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log(`listening on ${process.env.DOMAIN}:${process.env.PORT || 3333}`)
})
