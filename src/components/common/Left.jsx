import { Box, Container, Flex, Section } from "@radix-ui/themes";
import Login from "./Login";
import Time from "./Time";
import Weather from "./Weather";
import Content from "./Content";

const Left = () => {
  return (
    <Section>
      <Container width="400px">
        <Flex direction="column" gap="3">
          <Login />
          <Time />
          <Weather />
          <Content />
        </Flex>
      </Container>
    </Section>
  );
};

export default Left;
