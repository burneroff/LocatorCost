import { useState } from "react";
import { Container, SimpleGrid, Pagination } from "@mantine/core";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import classes from "./auctionPagination.module.css";
export default function AuctionWithPagination() {
  // Assuming you have an array of items to render as CarouselCard components
  const items = [
    { title: "Один" },
    { title: "Один" },
    { title: "Один" },
    { title: "Один" },
    { title: "Один" },
    { title: "Два" },
    { title: "Два" },
  ]; // Example items array
  const itemsPerPage = 5; // Number of items to show per page

  const [activePage, setActivePage] = useState(1);

  // Calculate the starting and ending indices of the items to display on the current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to get the items for the current page
  const paginatedItems = items.slice(startIndex, endIndex);

  return (
    <Container size="1000px" mt={50} className={classes.wrapper}>
      <SimpleGrid cols={1}>
        {paginatedItems.map((item, index) => (
          <CarouselCard key={index} title={item.title} /> // Use appropriate key if your items have unique ids
        ))}
      </SimpleGrid>
      <Pagination
        value={activePage}
        onChange={setActivePage}
        total={Math.ceil(items.length / itemsPerPage)}
        mt="10"
        mb={50}
      />
    </Container>
  );
}
