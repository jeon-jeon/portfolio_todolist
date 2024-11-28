import {
  Box,
  Button,
  Container,
  Flex,
  Strong,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import TodoTable from "./TodoTable";

const Main = () => {
  const [todolist, setTodoList] = useState([]);

  const [text, setText] = useState("");
  const chgText = (e) => {
    setText((prev) => e.target.value);
  };

  const submit = () => {
    setTodoList((prev) => [...prev, text]);
    setText("");
  };

  const remove = (i) => {
    setTodoList((prev) => {
      const newArr = [...prev];
      const filterdArr = newArr.filter((v, idx) => i != idx);
      return filterdArr;
    });
  };

  return (
    <Container
      height="100%"
      style={{
        flex: "3",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Flex direction="column" gap="3">
        <Text size="5">
          <Strong>오늘의 일정</Strong>
        </Text>
        <Flex justify="between" align="center">
          <Box width="400px">
            <TextField.Root
              onChange={chgText}
              value={text}
              placeholder="TO-DO List를 입력해주세요."
            ></TextField.Root>
          </Box>
          <Button radius="medium" onClick={submit}>
            전송
          </Button>
        </Flex>
      </Flex>
      {todolist.map((v, i) => (
        <TodoTable content={v} remove={() => remove(i)} />
      ))}
    </Container>
  );
};

export default Main;
