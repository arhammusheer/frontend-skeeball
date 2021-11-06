import { io } from "socket.io-client";

export default function App() {
  const socket = io("http://skeeball.croissant.one:3001");
  return (
    "socket.io"
  );
}