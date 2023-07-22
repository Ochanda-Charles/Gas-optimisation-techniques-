const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });
  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      // Call the contract function to reset the numbers array
      await gas_contract.optimizedFunction();
      // Call the contract function to calculate the sum of the array
      const sum = await gas_contract.getSumOfArray();
      // Verify that the sum equals 0
      expect(sum).to.equal(0);
    });
  });
});
