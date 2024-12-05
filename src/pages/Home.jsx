import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.0rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const LogoImg = styled.img`
  width: 30%;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Title>Welcome to SmartTruck Logistics</Title>
        <LogoImg src="public/truck.jpg" alt="Truck" />
        <Description>
          At <Highlight>SmartTruck Logistics</Highlight>, we excel in managing
          trucks and drivers to ensure smooth and efficient operations. Our
          platform helps businesses monitor <Highlight>fleets</Highlight>,
          assign <Highlight>drivers</Highlight>, and achieve{" "}
          <Highlight>timely deliveries</Highlight>. Trust us for reliability and
          efficiency every step of the way!
        </Description>
      </Container>
    </>
  );
};

export default Home;
