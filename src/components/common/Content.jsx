import { Avatar, Box, Flex, Strong, Text } from "@radix-ui/themes";

const Content = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Text size="5">
        <Strong>명수옹 어록</Strong>
      </Text>
      <Flex justify="between" align="center">
        <Text size="3" color="gray">
          늦었다고 생각할 때가 늦었다.
        </Text>
        <Avatar
          size="5"
          src="https://landhyun.github.io/momentum/img/%EB%AA%85%EC%88%981.jpg"
          radius="full"
          fallback="A"
        />
      </Flex>
    </Box>
  );
};

export default Content;
