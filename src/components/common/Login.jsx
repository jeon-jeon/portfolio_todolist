import { Avatar, Box, Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Login = () => {
  const [name, SetName] = useState("");

  const logout = () => {
    const visitor = prompt("이름을 입력해 주세요") || "Guest";
    SetName((prev) => visitor);
  };

  useEffect(() => {
    const visitor = prompt("이름을 입력해 주세요") || "Guest";
    SetName((prev) => visitor);
  }, []);

  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Flex justify="between" align="center">
        <Avatar
          size="5"
          radius="full"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Text size="4" weight="bold">
          {name}님, 안녕하세요.
        </Text>
        <Button radius="medium" onClick={logout}>
          로그아웃
        </Button>
      </Flex>
    </Box>
  );
};

export default Login;
