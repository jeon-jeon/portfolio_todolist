import { Container, Flex } from "@radix-ui/themes";
import Login from "./Login";
import Time from "./Time";
import Weather from "./Weather";
import Advice from "./Advice";

const Side = () => {
  return (
    <Container style={{ flex: "2", height: "100%" }}>
      <Flex direction="column" gap="3">
        <Login />
        <Time />
        <Weather />
        <Advice />
      </Flex>
    </Container>
  );
};

export default Side;
