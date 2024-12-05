import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: 60%; /* Adjust the width to make it smaller */
  margin: 20px auto;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  justify-content: center;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px; /* Set a maximum width */
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #b0c4de;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  max-width: 400px; /* Set a maximum width */
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #b0c4de;
  border-radius: 4px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4682b4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5a9bd4;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const RegisterDriver = () => {
  const { setDriver } = useOutletContext();
  const url = "http://localhost:3000/drivers";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.target;
    const form = new FormData(formElement);
    const formEntries = form.entries();
    const formJson = Object.fromEntries(formEntries);

    // Wrap street, zip, and city in an address object
    const address = {
      street: formJson.street,
      zip: formJson.zip,
      city: formJson.city,
    };

    // Remove street, zip, and city from formJson and add address
    delete formJson.street;
    delete formJson.zip;
    delete formJson.city;

    formJson.address = address;

    // Fetch existing drivers to calculate the next driverId
    const response = await fetch(url);
    const existingDrivers = await response.json();

    // Calculate the next driverId starting from 11
    const nextDriverId = 1 + existingDrivers.length; // Adding 1 to the number of existing drivers

    formJson.driverId = nextDriverId;

    console.log("New Driver Data:", formJson);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formJson),
    })
      .then((res) => res.json())
      .then((data) => setDriver(data));
  };

  return (
    <>
      <Title>Register New Driver</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="license">License Number:</Label>
        <Input type="text" id="license" name="license" required />

        <Label htmlFor="phone">Phone Number:</Label>
        <Input type="tel" id="phone" name="phone" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="street">Street Address:</Label>
        <Input type="text" id="street" name="street" required />

        <Label htmlFor="zip">ZIP Code:</Label>
        <Input type="text" id="zip" name="zip" required />

        <Label htmlFor="city">City:</Label>
        <Input type="text" id="city" name="city" required />

        <Label htmlFor="assignedTruck">Assigned Truck:</Label>
        <Select id="assignedTruck" name="assignedTruck">
          <option value="">Select a Truck</option>
          <option value="1">Truck 1</option>
          <option value="2">Truck 2</option>
          <option value="3">Truck 3</option>
          <option value="4">Truck 4</option>
          <option value="5">Truck 5</option>
        </Select>

        <CheckboxLabel htmlFor="agreeToTerms">
          <Input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            required
          />
          I agree to the terms and conditions
        </CheckboxLabel>

        <Button type="submit">Register Driver</Button>
      </Form>
    </>
  );
};

export default RegisterDriver;
