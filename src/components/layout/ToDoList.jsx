import { Flex, Section } from "@radix-ui/themes";
import Left from "../common/Left";
import Right from "../common/Right";

const ToDoList = () => {
  return (
    <Section>
      <Flex justify="center" align="center" gap="3">
        <Left />
        <Right />
      </Flex>
    </Section>
  );
};

export default ToDoList;
