import * as express from 'express'
import { Router } from 'express'
import Memory from '../entity/Memory'

const app = Router()

app.post('/post', async (req: express.Request, res: express.Response) => {
  //Future route for accepting data!
  const data = req.body.mem
  //UTC Timestamp
  data.timestamp = Math.floor(Date.now() / 1000)
  //static id, system server feature coming soon
  data.id = '9624af56-4f5f-4da2-89e0-7a41f2642061'
  const memory = Memory.create({ ...data })
  //Save to database
  await memory.save()
  res.end()
})

export default app
