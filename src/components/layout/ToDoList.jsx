import { Flex, Section } from "@radix-ui/themes";
import Main from "../common/Main";
import Side from "../common/Side";

const ToDoList = () => {
  return (
    <Section width="100%" maxWidth="1400px" height="90%">
      <Flex justify="center" align="center" gap="3" height="90%">
        <Side />
        <Main />
      </Flex>
    </Section>
  );
};

export default ToDoList;
