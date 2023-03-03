import { Stack, VStack, Heading,Image, Text, Box, HStack } from "@chakra-ui/react"
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { useFirestore } from "../../hooks/useFirestore";
import { useEffect, useState } from "react";

const HouseDetails = () => {
  const [info , setInfo] = useState(JSON.parse(localStorage.getItem("housedata")));
  console.log(info);
  const {propertyId} = useParams();
  
  const searchedHouse = info.find(house=> house.id== propertyId)
  console.log(searchedHouse.imgUrl);

  return (
    <>
      <Stack direction={{base: 'column', md: 'row'}} justify='space-between' align={{md: 'center'}}  my='28px'>
        <Box>
          <Heading fontSize='22px'>{searchedHouse.name}</Heading>
          <Text px='3' borderRadius='full' bg='orange.300'>{searchedHouse.address}</Text>
        </Box>
        <HStack>
          <Text px='3' borderRadius='full' bg='green.300'>{searchedHouse.title}</Text>
          <Text px='3' borderRadius='full' bg='purple.300'>{searchedHouse.country}</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">Rs.{searchedHouse.curPrice}</Text>
      </Stack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
        <Image  src={searchedHouse.imgUrl}  width='600px' height='400px' />
          <Stack py='10px' spacing={{sm: '3', md: '5'}} direction={{base: 'column', md: 'row'}}>
            <HStack>
                <BiBed style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.bedrooms} Bedroom</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.bathrooms} Bathroom</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.surface}</Text>
            </HStack>
          </Stack>
        
          <Text> {searchedHouse.desc}</Text>
      
        </VStack>
        
        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  )
}

export default HouseDetails;