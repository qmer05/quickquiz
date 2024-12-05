import { useNavigate, useOutletContext } from "react-router-dom";
import styled from 'styled-components';

const Table = styled.table`
  width: 80%; /* Adjust the width to make it smaller */
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

const Drivers = () => {
  const { drivers } = useOutletContext();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/drivers/${id}`);
  };

  return (
    <>
      <Title>Driver List</Title>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>License</Th>
            <Th>Phone</Th>
            <Th>Email</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <tbody>
          {drivers.map((driver) => (
            <Tr key={driver.id} onClick={() => handleClick(driver.id)}>
              <Td>{driver.name}</Td>
              <Td>{driver.license}</Td>
              <Td>{driver.phone}</Td>
              <Td>{driver.email}</Td>
              <Td>
                {driver.address && (
                  <>
                    {driver.address.street + " "}
                    {driver.address.zip + " "}
                    {driver.address.city}
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Drivers;