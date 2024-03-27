import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Input, Textarea, Image, Grid, GridItem, Link, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FaShoppingCart, FaCalendar } from "react-icons/fa";

const Index = () => {
  const [age, setAge] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const generateHoroscope = () => {
    // TODO: Generate personalized horoscope based on age
    const sampleHoroscope = "Your horoscope suggests a time of growth and new opportunities. Trust your instincts and embrace change. Lucky numbers: 4, 17, 23.";
    setHoroscope(sampleHoroscope);
  };

  const products = [
    { id: 1, name: "Astrology Book", price: 19.99 },
    { id: 2, name: "Zodiac Necklace", price: 29.99 },
    { id: 3, name: "Tarot Card Deck", price: 14.99 },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const closeModal = () => {
    setSelectedProduct(null);
    onClose();
  };

  const scheduleAppointment = () => {
    // TODO: Implement appointment scheduling logic
    console.log(`Scheduled appointment on ${selectedDate} at ${selectedTime}`);
    onClose();
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Devina's Astrology
      </Heading>

      {/* Personalized Horoscope */}
      <VStack spacing={6} alignItems="center" mb={12}>
        <Heading as="h2" size="xl">
          Your Personalized Horoscope
        </Heading>
        <Text>Enter your age to receive your horoscope reading:</Text>
        <HStack>
          <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <Button colorScheme="purple" onClick={generateHoroscope}>
            Get Horoscope
          </Button>
        </HStack>
        {horoscope && (
          <Box bg="purple.50" p={4} borderRadius="md">
            <Text>{horoscope}</Text>
          </Box>
        )}
      </VStack>

      {/* Forums */}
      <VStack spacing={6} alignItems="center" mb={12}>
        <Heading as="h2" size="xl">
          Astrology Forums
        </Heading>
        <Text>Engage in discussions and connect with fellow astrology enthusiasts.</Text>
        <Link href="/forums" color="purple.500">
          Visit Forums
        </Link>
      </VStack>

      {/* About Me */}
      <VStack spacing={6} alignItems="center" mb={12}>
        <Heading as="h2" size="xl">
          About Devina
        </Heading>
        <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMGZlbWFsZSUyMGFzdHJvbG9nZXJ8ZW58MHx8fHwxNzExNTExMTY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devina" borderRadius="full" boxSize="200px" />
        <Text>Devina is a renowned astrologer with years of experience in providing accurate and insightful horoscope readings. She has a deep understanding of the celestial bodies and their influence on human lives. Devina is passionate about helping individuals navigate their life path and make informed decisions based on astrological guidance.</Text>
      </VStack>

      {/* E-commerce */}
      <VStack spacing={6} alignItems="center" mb={12}>
        <Heading as="h2" size="xl">
          Astrology Shop
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem key={product.id}>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Image src="https://images.unsplash.com/photo-1658915379545-2c0edd7feb2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3Ryb2xvZ3klMjBwcm9kdWN0fGVufDB8fHx8MTcxMTUxMTE2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt={product.name} mb={4} />
                <Heading as="h3" size="md">
                  {product.name}
                </Heading>
                <Text fontWeight="bold">${product.price}</Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="purple" size="sm" mt={4} onClick={() => openModal(product)}>
                  Add to Cart
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>

      {/* Appointment Scheduling */}
      <VStack spacing={6} alignItems="center">
        <Heading as="h2" size="xl">
          Schedule an Appointment
        </Heading>
        <Text>Book a personalized horoscope reading with Devina.</Text>
        <IconButton icon={<FaCalendar />} colorScheme="purple" size="lg" onClick={onOpen} aria-label="Schedule Appointment" />
      </VStack>

      {/* Appointment Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Schedule an Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Select Date</FormLabel>
              <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Select Time</FormLabel>
              <Select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="">Select a time slot</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={scheduleAppointment}>
              Schedule
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
