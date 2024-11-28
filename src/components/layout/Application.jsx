import { Section } from "@radix-ui/themes";

const Application = ({ children }) => {
  return (
    <Section
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Section>
  );
};

export default Application;
