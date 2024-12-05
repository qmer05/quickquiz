import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TruckDetailsContainer = styled.div`
  padding: 20px;
  margin: auto;
  width: 50%;
  background-color: #f0f8ff;
  border-radius: 8px;
  border: 1px solid #b0c4de;
`;

const TruckCard = () => {
  const { id } = useParams(); // Get truckId from the URL
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    const fetchTruck = async () => {
      const response = await fetch(`http://localhost:3000/trucks/${id}`);
      const data = await response.json();
      setTruck(data);
    };

    fetchTruck();
  }, [id]);

  if (!truck) {
    return <p>Loading truck details...</p>;
  }

  return (
    truck && (
      <TruckDetailsContainer>
        <h2>Truck Details</h2>
        <p>
          <strong>Name:</strong> {truck.name}
        </p>
        <p>
          <strong>Model:</strong> {truck.model}
        </p>
        <p>
          <strong>Capacity:</strong> {truck.capacity}
        </p>
        <p>
          <strong>Max Speed:</strong> {truck.maxSpeed}
        </p>
        <p>
          <strong>Weight:</strong> {truck.weight}
        </p>
        <p>
          <strong>Length:</strong> {truck.length}
        </p>
        <p>
          <strong>Drivers:</strong> {truck.drivers?.join(", ")}
        </p>
      </TruckDetailsContainer>
    )
  );
};

export default TruckCard;
