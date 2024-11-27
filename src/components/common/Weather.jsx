import { Avatar, Box, Flex, Strong, Text } from "@radix-ui/themes";

const Weather = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Text size="5">
        <Strong>날씨</Strong>
      </Text>
      <Flex justify="between" align="center">
        <Text size="3" color="gray"></Text>
        <Avatar
          size="5"
          src="https://landhyun.github.io/momentum/img/weather-news.png"
          fallback="A"
        />
      </Flex>
    </Box>
  );
};

export default Weather;
