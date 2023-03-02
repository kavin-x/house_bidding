import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Countdown from "react-countdown";

const HouseItem = ({days, hours, minutes, seconds, completed, props}) => {
  if(completed)
  {
    return null
  }
  return (
    <Flex justify='center' align='center'>
        <Stack justify='center' width="300px" bg="white" boxShadow="xl" borderRadius="xl">
        <Image src={props.item.imgUrl} h='170' alt='houses' />

        <VStack p='4' align='left'>
            <Text mt="-1" fontWeight="extrabold" fontSize="18px" color="pink.500">
            Current Bid Rs.{props.item.curPrice}
            </Text>

            <Heading fontSize="24px" letterSpacing="tight">
            {props.item.name}
            </Heading>

            <Text fontSize="13px" color="grey">
             {props.item.address}
            </Text>

            <Divider my="2.5" />

            <HStack spacing="5">
            <HStack>
                <BiBed style={{ color: "#D53F8C" }} />
                <Text fontSize="12px">{props.item.bedrooms}</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#D53F8C" }} />
                <Text fontSize="12px">{props.item.bathrooms}</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#D53F8C" }} />
                <Text fontSize="12px">{props.item.surface}</Text>
            </HStack>
            
            </HStack>
            <div className="card-body">
          <p className="lead display-6">{props.item.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <p className="card-text">{props.item.desc}</p>
          <div className="d-flex justify-content-between align-item-center">
            <div>
              {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <p className="display-6">Winner</p>
              ) : (
                <div
                  onClick={() =>
                    props.bidAuction(props.item.id, props.item.curPrice)
                  }
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              )}
            </div>
          </div>
        </div>
            <Button  p={{base: 3, md: 2}} size="100%">bid</Button>
        </VStack>
        </Stack>
    </Flex>
  );
};

export default HouseItem;

export const AuctionCard = ({ item }) => {
  console.log(item);
  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={HouseItem}
    />
  );
};
