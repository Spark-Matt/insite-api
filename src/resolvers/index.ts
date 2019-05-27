import Battery from '../entity/Battery'
import OperatingSystem from '../entity/OperatingSystem'
import Client from '../entity/Client'
import { ResolverMap } from '../types/graphql'
import CPU from '../entity/CPU'
import System from '../entity/System'
import Bios from '../entity/Bios'
import FileSystem from '../entity/FileSystem'

const resolvers: ResolverMap = {
  Query: {
    async getAllClients() {
      let clients = await Client.find()
      if (!clients) return null
      return clients
    },
    getAllData(_, { id }) {
      return { id }
    },
  },
  Payload: {
    async system(parent) {
      let { id } = parent
      let system = await System.findOne({ where: { id } })
      if (!system) return null
      return system
    },
    async bios(parent) {
      let { id } = parent
      let bios = await Bios.findOne({ where: { id } })
      if (!bios) return null
      return bios
    },
    async fs(parent) {
      let { id } = parent
      let fs = await FileSystem.find({ where: { id } })
      if (!fs) return null
      return fs
    },
    async os(parent) {
      let { id } = parent
      let os = await OperatingSystem.findOne({ where: { id } })
      if (!os) return null
      return os
    },
    async cpu(parent) {
      let { id } = parent
      let cpu = await CPU.findOne({ where: { id } })
      if (!cpu) return null
      return cpu
    },
    async battery(parent) {
      let { id } = parent
      let battery = await Battery.findOne({ where: { id } })
      if (!battery) return null
      return battery
    },
  },
}
export default resolvers
