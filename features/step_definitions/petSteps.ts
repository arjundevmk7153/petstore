import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import { expect } from "chai";
import dotenv from "dotenv";

if (!process.env.BASE_URL) {
  dotenv.config();
}

const BASE_URL = process.env.BASE_URL || "http://localhost:8080/api/v3";
let petPayload: any;
let updatedPetPayload: any;
let response: any;
let petId: number = 10;

// ------------------ GIVEN ------------------

Given("I have a valid pet payload", () => {
  petPayload = {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs"
    },
    photoUrls: ["string"],
    tags: [
      {
        id: 0,
        name: "string"
      }
    ],
    status: "available"
  };
});

Given("I have an updated pet payload", () => {
  updatedPetPayload = {
    id: 10,
    name: "cattie",
    category: {
      id: 1,
      name: "Dogs"
    },
    photoUrls: ["string"],
    tags: [
      {
        id: 0,
        name: "string"
      }
    ],
    status: "available"
  };
});

// ------------------ WHEN ------------------

When("I send a request to create the pet", async () => {
  try {
    response = await axios.post(`${BASE_URL}/pet`, petPayload);
    petId = response.data.id;
  } catch (err: any) {
    response = err.response;
  }
});

When("I send a request to get the pet by ID", async () => {
  try {
    response = await axios.get(`${BASE_URL}/pet/${petId}?petId=${petId}`);
  } catch (err: any) {
    response = err.response;
  }
});

When("I send a request to update the pet", async () => {
  try {
    response = await axios.put(`${BASE_URL}/pet/`, updatedPetPayload);
  } catch (err: any) {
    response = err.response;
  }
});

When("I send a request to delete the pet by ID", async () => {
  try {
    response = await axios.delete(`${BASE_URL}/pet/${petId}?petId=${petId}`);
  } catch (err: any) {
    response = err.response;
  }
});

// ------------------ THEN ------------------

Then("I should receive a 200 response", () => {
  expect(response.status).to.equal(200);
});

Then("The response should contain the pet ID", () => {
  expect(response.data).to.have.property("id");
  expect(response.data.id).to.equal(10);
});

Then("The response should contain the pet details", () => {
  expect(response.data).to.have.property("id");
  expect(response.data.id).to.equal(10);
  expect(response.data).to.have.property("name");
});

Then("The response should contain the updated pet details", () => {
  expect(response.data).to.have.property("id");
  expect(response.data.id).to.equal(10);
  expect(response.data).to.have.property("name");
  expect(response.data.name).to.equal("cattie");
});

Then("The response should confirm deletion", () => {
  expect(response.status).to.equal(200);
});

Then("I should receive a 404 response", () => {
  expect(response.status).to.equal(404);
});
