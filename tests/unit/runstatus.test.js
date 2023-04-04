import { createServer } from "http";
import { Server } from "socket.io";
import Client from "../../client/node_modules/socket.io-client";

import RunStatus from "../../runstatus";
let port;
let io;
let runStatus;
beforeAll((done) => {
  const httpServer = createServer();
  io = new Server(httpServer);
  httpServer.listen(() => {
    port = httpServer.address().port;

    runStatus = new RunStatus();
    runStatus.start(httpServer);

    done();
  });
});

afterAll(() => {
  io.close();
});

test("RunStatus - Connect", (done) => {
  // Create a client
  const clientSocket = new Client(`http://localhost:${port}`);
  clientSocket.on("connect", () => {
    clientSocket.on("updatedRun", (run) => {
      expect(run.runId).toBe(123);
      clientSocket.close();
      done();
    });

    // Emit the message
    runStatus.updatedRun({ runId: 123 });
  });
});
