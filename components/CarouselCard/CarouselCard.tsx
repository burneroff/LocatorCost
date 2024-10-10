import {
  Image,
  Card,
  Text,
  Group,
  Button,
  rem,
  SimpleGrid,
  Flex,
  Grid,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./CarouselCard.module.css";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export function CarouselCard(props: any) {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder>
      <Grid>
        <Grid.Col span={4}>
          <Carousel
            mt={20}
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Grid.Col>
        <Grid.Col span={6}>
          <SimpleGrid cols={1} mt="lg">
            <Flex direction={"column"}>
              <Text fw={500} fz="lg">
                {props.title}
              </Text>
              <Text fz="md" c="dimmed" mt="sm">
                Чижовка, д.140
              </Text>
            </Flex>
            <Text fz="sm" c="dimmed" mt="sm">
              Relax, rejuvenate and unplug in this unique contemporary Birdbox.
              Feel close to nature in ultimate comfort. Enjoy the view of the
              epic mountain range of Blegja and the Førdefjord.
            </Text>
            <Text fz="xl" span fw={500} className={classes.price}>
              397$
            </Text>
            <Button radius="md">Сделать ставку</Button>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={2}>
          <SimpleGrid cols={1} verticalSpacing="1px" mt={20}>
            <Text fz="sm" c="dimmed" mt="sm">
              19.04.2024 07:37
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
              № лота: 37923
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
              Просмотров: 154
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
              Ставок: 7
            </Text>
            <Text fz="sm" c="green" mt="sm">
              Торги завершены успешно
            </Text>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
