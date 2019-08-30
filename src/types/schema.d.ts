// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
getAllClients: Array<IClient | null>;
getAllData: IPayload;
}

interface IGetAllDataOnQueryArguments {
id: string;
}

interface IClient {
__typename: "Client";
id: string | null;
lastTimestamp: number | null;
}

interface IPayload {
__typename: "Payload";
system: ISystem | null;
bios: IBios | null;
baseboard: IBaseBoard | null;
os: IOperatingSystem | null;
cpu: ICPU | null;
displays: Array<IDisplay | null> | null;
controllers: Array<IController | null> | null;
networkInterfaces: Array<INetworkInterface | null> | null;
time: ITime | null;
cpuSpeed: Array<ICPUSpeed | null> | null;
cpuLoad: Array<ICPULoad | null> | null;
fs: Array<IFileSystem | null> | null;
memory: IMemory | null;
networkConnections: Array<INetworkConnection | null> | null;
users: Array<IUser | null> | null;
battery: IBattery | null;
processes: Array<IProcess | null> | null;
}

interface ISystem {
__typename: "System";
manufacturer: string | null;
model: string | null;
version: string | null;
serial: string | null;
uuid: string | null;
sku: string | null;
}

interface IBios {
__typename: "Bios";
vendor: string | null;
version: string | null;
releaseDate: string | null;
revision: string | null;
}

interface IBaseBoard {
__typename: "BaseBoard";
manufacturer: string | null;
model: string | null;
version: string | null;
serial: string | null;
assetTag: string | null;
}

interface IOperatingSystem {
__typename: "OperatingSystem";
platform: string | null;
distro: string | null;
release: string | null;
codename: string | null;
kernel: string | null;
arch: string | null;
hostname: string | null;
logofile: string | null;
}

interface ICPU {
__typename: "CPU";
manufacturer: string | null;
brand: string | null;
vendor: string | null;
family: string | null;
model: string | null;
stepping: string | null;
revision: string | null;
voltage: string | null;
speed: string | null;
speedmin: string | null;
speedmax: string | null;
core: number | null;
}

interface IDisplay {
__typename: "Display";
id: string | null;
timestamp: number | null;
connection: string | null;
main: boolean | null;
builtin: boolean | null;
model: string | null;
resolutionx: number | null;
resolutiony: number | null;
sizex: number | null;
sizey: number | null;
pixeldepth: number | null;
}

interface IController {
__typename: "Controller";
id: string | null;
timestamp: number | null;
vendor: string | null;
model: string | null;
bus: string | null;
vram: number | null;
vramDynamic: number | null;
}

interface INetworkInterface {
__typename: "NetworkInterface";
id: string | null;
timestamp: number | null;
iface: string | null;
ip4: string | null;
ip6: string | null;
mac: string | null;
internal: boolean | null;
}

interface ITime {
__typename: "Time";
id: string | null;
timestamp: number | null;
current: number | null;
uptime: number | null;
timezone: string | null;
timezoneName: string | null;
}

interface ICPUSpeed {
__typename: "CPUSpeed";
id: string | null;
timestamp: number | null;
min: number | null;
max: number | null;
avg: number | null;
}

interface ICPULoad {
__typename: "CPULoad";
id: string | null;
timestamp: number | null;
avgload: number | null;
currentload: number | null;
currentload_user: number | null;
currentload_system: number | null;
currentload_nice: number | null;
currentload_idle: number | null;
currentload_irq: number | null;
raw_currentload: number | null;
raw_currentload_user: number | null;
raw_currentload_system: number | null;
raw_currentload_nice: number | null;
raw_currentload_idle: number | null;
raw_currentload_irq: number | null;
}

interface IFileSystem {
__typename: "FileSystem";
id: string | null;
timestamp: number | null;
fs: string | null;
type: string | null;
size: string | null;
used: string | null;
use: number | null;
mount: string | null;
}

interface IMemory {
__typename: "Memory";
id: string | null;
timestamp: number | null;
total: string | null;
free: string | null;
used: string | null;
use: number | null;
active: string | null;
available: string | null;
buffcache: string | null;
swaptotal: string | null;
swapused: string | null;
swappercent: string | null;
swapfree: string | null;
}

interface INetworkConnection {
__typename: "NetworkConnection";
id: string | null;
timestamp: number | null;
protocol: string | null;
localaddress: string | null;
localport: string | null;
peeraddress: string | null;
peerport: string | null;
state: string | null;
}

interface IUser {
__typename: "User";
id: string | null;
timestamp: number | null;
user: string | null;
tty: string | null;
date: string | null;
time: string | null;
ip: string | null;
command: string | null;
}

interface IBattery {
__typename: "Battery";
id: string | null;
timestamp: number | null;
hasbattery: boolean | null;
cyclecount: number | null;
ischarging: boolean | null;
maxcapacity: number | null;
currentcapacity: number | null;
percent: number | null;
timeremaining: number | null;
acconnected: boolean | null;
type: string | null;
model: string | null;
manufacturer: string | null;
serial: string | null;
}

interface IProcess {
__typename: "Process";
id: string | null;
timestamp: number | null;
pid: number | null;
name: string | null;
pcpu: string | null;
pcpuu: string | null;
pcpus: string | null;
pmem: string | null;
priority: number | null;
mem_vsz: string | null;
mem_rss: string | null;
nice: number | null;
started: string | null;
state: string | null;
tty: string | null;
user: string | null;
command: string | null;
}

interface IMutation {
__typename: "Mutation";
register: boolean | null;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
}

interface ISubscription {
__typename: "Subscription";
jsonAdded: string | null;
}
}

// tslint:enable
