import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size={"1440px"}>
        <Title className={classes.title}>ПРОДАВАЙ ДОРОГО ПОКУПАЙ ДЁШЕВО</Title>
        <Button size="xl" variant="filled" color="#6600FF">
          Торги
        </Button>
      </Container>
    </div>
  );
}
