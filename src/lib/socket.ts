import { io } from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_SERVERURL}`, {});

socket.on("connect", () => {
  console.log("connected to server");
});

export default socket;
