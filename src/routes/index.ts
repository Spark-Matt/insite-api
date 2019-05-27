import * as express from 'express'
import { Router } from 'express'
import Memory from '../entity/Memory'
import Client from '../entity/Client'
import User from '../entity/User'
import Battery from '../entity/Battery'
import OperatingSystem from '../entity/OperatingSystem'
import Time from '../entity/Time'

const app = Router()

app.post('/post', async (req: express.Request, res: express.Response) => {
  //Future route for accepting data!
  //If POST doesnt have a body, reject
  if (!req.body) return res.end()

  //UTC Timestamp
  const timestamp = Math.floor(Date.now() / 1000)
  //static id, system server feature coming soon
  const id = '9624af56-4f5f-4da2-89e0-7a41f2642061'

  //const { _id: id } = req.body
  const client = Client.create({
    id,
    lastTimestamp: timestamp,
  })
  await client.save()

  //Save CPU
  const { os } = req.body
  await OperatingSystem.create({
    id,
    timestamp,
    ...os,
  }).save()

  //Save timezone
  const { time } = req.body
  await Time.create({
    id,
    timestamp,
    ...time,
  }).save()

  //Save memory
  const memory = req.body.mem
  await Memory.create({ ...memory, timestamp, id })

  //Get users
  const users = req.body.users
  users.map(
    async (user: User) =>
      await User.create({
        ...user,
        id,
        timestamp,
      }).save()
  )
  //Get Battery data
  const battery = req.body.battery
  await Battery.create({
    id,
    timestamp,
    ...battery,
  }).save()

  res.end()
})

export default app
