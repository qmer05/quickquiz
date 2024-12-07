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
  font-size: 1rem;
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
        <Title>Welcome to Quick Quiz</Title>
        <LogoImg src="/home-quiz.jpg" alt="Truck" />
        <Description>
          At <Highlight>Quick Quiz</Highlight>, we bring excitement and learning
          together with engaging and fun trivia challenges. Our platform offers
          a wide range of <Highlight>quiz categories</Highlight>, tests your{" "}
          <Highlight>knowledge</Highlight>, and sharpens your{" "}
          <Highlight>thinking skills</Highlight>. Dive in for a fast-paced,
          thrilling trivia experience that’s perfect for everyone!
        </Description>
      </Container>
    </>
  );
};

export default Home;
