import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

const DriverDetailsContainer = styled.div`
  padding: 20px;
  margin: auto;
  width: 50%;
  background-color: #f0f8ff;
  border-radius: 8px;
  border: 1px solid #b0c4de;
`;

const DriverCard = () => {
  const { id } = useParams(); // Get driverId from the URL
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchDriver = async () => {
      const response = await fetch(`http://localhost:3000/drivers/${id}`);
      const data = await response.json();
      setDriver(data);
    };

    fetchDriver();
  }, [id]);

  if (!driver) {
    return <p>Loading driver details...</p>;
  }

  return (
    <DriverDetailsContainer>
      <h2>Driver Details</h2>
      <p>
        <strong>Name:</strong> {driver.name}
      </p>
      <p>
        <strong>License:</strong> {driver.license}
      </p>
      <p>
        <strong>Phone:</strong> {driver.phone}
      </p>
      <p>
        <strong>Email:</strong> {driver.email}
      </p>
      <p>
        <strong>Address:</strong> {`${driver.address.street} ${driver.address.zip} ${driver.address.city}`}
      </p>
    </DriverDetailsContainer>
  );
};

export default DriverCard;
