import { Avatar, Box, Flex, Strong, Text } from "@radix-ui/themes";
import { rand } from "../../utils/math";

const Advice = () => {
  const advices = [
    "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
    "늦었다고 생각할 때가 늦었다",
    "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
    "어려운 길은 길이 아니다",
    "즐길 수 없으면 피하라",
    "성공은 1% 재능과 99%의 빽",
    "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다 ",
    "가는 말이 고우면 얕본다",
    "고생 끝에 골병 난다",
    "티끌 모아 티끌",
    "한 번 누우면 끝. 지금 많이 사랑하라",
    "결혼은 좋은 짝을 만나는 게 아니라 좋은 짝이 되어주는 거다",
  ];
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
          {advices[rand(0, advices.length - 1)]}
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

export default Advice;
