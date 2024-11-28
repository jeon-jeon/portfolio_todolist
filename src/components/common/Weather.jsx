import { Avatar, Box, Flex, Strong, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");

  const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
  const lat = 37.456;
  const lon = 126.705;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemp((prev) => data.main.feels_like);
        setWeather((prev) => data.weather[0].main);
      });
  }, []);

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
        <Text size="3" color="gray">
          {weather} {temp}℃
        </Text>
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
