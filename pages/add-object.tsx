import { Header } from "../components/Header/Header";
import "@mantine/carousel/styles.css";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useContext, useState } from "react";
import classes from "./addObject.module.css";
import {
  Card,
  Container,
  Flex,
  Group,
  Text,
  Title,
  Button,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { IconCalendarMonth, IconKey } from "@tabler/icons-react";
import { Flat } from "../components/SVG/Flat";
import { Room } from "../components/SVG/Room";
import { Key } from "../components/SVG/Key";
import { Calendar } from "../components/SVG/Calendar";
import { House } from "../components/SVG/House";
import { Commercy } from "../components/SVG/Commercy";
import { Place } from "../components/SVG/Place";

export default function IndexPage() {
  const authContext = useContext(AuthContext);
  console.log("Auth data:", authContext);

  const [dealType, setDealType] = useState("Продать");
  const [propertyType, setPropertyType] = useState("Квартира");

  const handleSelect = (setter: any, type: any) => {
    setter(type);
  };

  const cardStyles = (selectedType: any, type: any) => ({
    cursor: "pointer",
    backgroundColor: selectedType === type ? "#228be6" : "#f1f3f5",
    color: selectedType === type ? "white" : "black",
    borderColor: selectedType === type ? "#1971c2" : "#d5d7da",
  });

  const handleSubmit = () => {
    const payload = {
      dealType,
      propertyType,
    };
    console.log("Submitting:", payload);
    // Здесь можно сделать запрос на сервер
    // Например, используя fetch или axios:
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(payload) })
  };

  const data = [
    {
      title: "Тип сделки",
      stateSelect: dealType,
      stateFunctionSelect: setDealType,
      variables: [
        {
          icon: Key,
          text: "Продать",
        },
        {
          icon: Calendar,
          text: "Снять",
        },
      ],
    },
    {
      title: "Тип недвижимости",
      stateSelect: propertyType,
      stateFunctionSelect: setPropertyType,
      variables: [
        {
          icon: Flat,
          text: "Квартира",
        },
        {
          icon: Room,
          text: "Комната",
        },
        {
          icon: House,
          text: "Дом",
        },
        {
          icon: Commercy,
          text: "Коммерческая",
        },
        {
          icon: Place,
          text: "Участок",
        },
      ],
    },
  ];

  return (
    <AuthProvider>
      <Header />
      <Container size="1440px">
        <Title size="32px" mt={50} style={{ marginBottom: 20 }}>
          Подать объявление
        </Title>
        {data.map((item) => {
          return (
            <Flex direction="column" ml="30" mt={20} maw="800px">
              <Text className={classes.text} style={{ marginBottom: 20 }}>
                {item.title}
              </Text>
              <Group>
                {item.variables.map((variant) => {
                  return (
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      miw={150}
                      style={cardStyles(item.stateSelect, variant.text)}
                      className={classes.card}
                      onClick={() =>
                        handleSelect(item.stateFunctionSelect, variant.text)
                      }
                    >
                      <variant.icon />
                      <Text>{variant.text}</Text>
                    </Card>
                  );
                })}
              </Group>
            </Flex>
          );
        })}
        <Flex direction="column" ml="30" mt={20} maw="800px">
          <Text className={classes.text} style={{ marginBottom: 20 }}>
            Адрес
          </Text>
          <TextInput label="Страна" value="Россия" readOnly mb={5} />
          <TextInput label="Область" value="Москоовская" readOnly mb={5} />
          <TextInput label="Город" value="г. Москва" readOnly mb={5} />
          <NumberInput
            label="Дом"
            placeholder="Введите номер дома"
            min={1}
            mb={5}
          />
          <Flex direction="column" mt={20} maw="800px">
          <Text className={classes.text} style={{ marginBottom: 20 }}>
            Торги
          </Text>
        </Flex>
          <Button onClick={handleSubmit} mt={20} mb={50}>
            Отправить
          </Button>
        </Flex>
        
      </Container>
    </AuthProvider>
  );
}
