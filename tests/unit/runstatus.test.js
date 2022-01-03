const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("../../client/node_modules/socket.io-client");

const RunStatus = require("../../runstatus");
let httpServer;
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
