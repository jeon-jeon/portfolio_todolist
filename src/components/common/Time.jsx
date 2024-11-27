import { Box, Flex, Strong, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Time = () => {
  const date = new Date().toDateString();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "30px 0px",
      }}
    >
      <Flex direction="column" gap="2" align="center">
        <Text size="7">
          <Strong>{date}</Strong>
        </Text>
        <Text size="8">
          <Strong>{time}</Strong>
        </Text>
      </Flex>
    </Box>
  );
};

export default Time;
