import { Stack, VStack, Heading, Text, Box, HStack } from "@chakra-ui/react"
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
          <Text fontSize='15px'>{searchedHouse.address}</Text>
        </Box>
        <HStack>
          <Text px='3' borderRadius='full' bg='green.300'>{searchedHouse.type}</Text>
          <Text px='3' borderRadius='full' bg='purple.300'>{searchedHouse.country}</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">Rs. {searchedHouse.price}</Text>
      </Stack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <img src={searchedHouse.imgUrl} alt='house' />

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
        
          <Text fontSize='15px'>{searchedHouse.description}</Text>
      
        </VStack>
        
        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  )
}

export default HouseDetails;