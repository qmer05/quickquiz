import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
  width: 30%; /* Adjust the width to make it smaller */
  border-collapse: collapse;
  margin: 20px auto; /* Center the table */
  font-size: 16px; /* Slightly smaller font size */
  text-align: left;
  background-color: #f0f8ff; /* Light blue background */
  border: 1px solid #b0c4de; /* Light steel blue border */
  font-family: Arial, Helvetica, sans-serif; /* Apply standard font */
  border-radius: 8px; /* Smooth edges */
  overflow: hidden; /* Ensure rounded corners */
`;

const Thead = styled.thead`
  background-color: #4682b4; /* Steel blue background */
  color: white; /* White text color */
`;

const Th = styled.th`
  padding: 10px;
  border-bottom: 1px solid #b0c4de; /* Light steel blue border */
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #e6f2ff; /* Light blue background for even rows */
  }

  &:hover {
    background-color: #d0e7ff; /* Light blue background on hover */
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #b0c4de; /* Light steel blue border */
`;

const Title = styled.h2`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif; /* Apply standard font */
`;

const Quizes = () => {
  const { quizzes } = useOutletContext();
  const navigate = useNavigate();

  const handleclick = (quiz) => {
    navigate(`/quiz/${quiz.id}`, { state: { quiz } });
  };

  return (
    <>
      <Title>Quiz List</Title>

      <Table>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Difficulty</Th>
          </Tr>
        </Thead>
        <tbody>
          {quizzes.map((quiz) => (
            <Tr key={quiz.id} onClick={() => handleclick(quiz)}>
              <Td>{quiz.category.replace(/_/g, " ")}</Td>
              <Td>{quiz.difficulty}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Quizes;