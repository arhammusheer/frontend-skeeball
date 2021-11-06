import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import { io } from "socket.io-client";
import Score from "./components/Score";
import Theme from "./components/Theme";
import Leaderboard from "./components/Leaderboard";
import { useState } from "react";

export default function App() {
  const [table, setTable] = useState([]);
  const [score, setScore] = useState(0);

  const socket = io("http://localhost:9000");
  socket.on("connection", () => {
    console.log("connected");
  });

  socket.on("newscore", (data) => {
    setScore(data.score);
    setTable(data.leaderboard);
    console.log(data)
  });

  return (
    <ChakraProvider>
      <Theme />
      <Center h={"40vh"}>
        <Score socket={socket} score={score} />
      </Center>
      <Center>
        <Leaderboard data={table} socket={socket} table={table}/>
      </Center>
    </ChakraProvider>
  );
}
