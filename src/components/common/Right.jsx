import { TrashIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Section,
  Strong,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";

const Right = () => {
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
    <Section>
      <Container width="600px">
        <Box
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "8px",
            padding: "20px",
            height: "550px",
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
            <Table.Root>
              <Table.Body>
                {todolist.map((v, i) => (
                  <Table.Row key={i}>
                    {/* <Table.RowHeaderCell>Check</Table.RowHeaderCell> */}
                    <Table.Cell>{v}</Table.Cell>
                    <Table.Cell justify="end">
                      <TrashIcon onClick={() => remove(i)} />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Flex>
        </Box>
      </Container>
    </Section>
  );
};

export default Right;
