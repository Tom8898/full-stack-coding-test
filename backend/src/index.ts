import * as http from 'http';
import { AddressInfo } from 'net';
import { App } from './app';


const app: App = new App();

const server: http.Server = http.createServer(app.express);
server.listen(3000, () => {
    const { port } = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${port}`);
});
