import { Center, Grid, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { HouseContext } from "../../context/HouseContext";
import { useFirestore } from "../../hooks/useFirestore";
import HouseItem, { AuctionCard } from "../Houses/HouseItem";

const BuyHouseList = () => {
  const { docs } = useFirestore("auctions");
  const { currentUser } = useContext(AuthContext);
  console.log(docs);
  if (docs.length === 0) {
    return (
      <Stack maxH="400px">
        <Heading size="lg" p={{ base: "6", md: "10" }} align="center">
          Oops... Can try another one?
        </Heading>
      </Stack>
    );
  }

  return (
    <Grid
      my="3"
      rowGap="4"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
    >
      {currentUser
        ? docs &&
          docs
            .filter((doc) => doc.email !== currentUser.email)
            .map((doc) => <AuctionCard key={doc.id} item={doc} />)
        : docs && docs.map((doc) => <AuctionCard key={doc.id} item={doc} />)}
    </Grid>
  );
};

export default BuyHouseList;
