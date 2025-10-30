# novexpower

This repository contains a frontend and a "fundus" smart contract. The contracts are developed and tested with Foundry.

## Project overview

- Frontend: UI to interact with the fundus smart contract.
- Contracts: Solidity smart contract(s) named `Fundus` (or similar) implemented and tested using Foundry.

## Tech stack

- Smart contracts: Solidity + Foundry (forge, anvil)
- Frontend: JavaScript/TypeScript (e.g., React, Vite) — adjust to your chosen framework
- Local node: anvil (part of Foundry)

## Quick start

1. Install Foundry

   - curl -L https://foundry.paradigm.xyz | bash
   - foundryup

2. Install frontend deps (from repo root or frontend folder)

   - cd frontend
   - npm install
   - npm run dev

3. Build and test contracts

   - forge build
   - forge test

4. Run a local node
   - anvil
   - Use the provided RPC URL (default http://127.0.0.1:8545) in frontend .env

## Environment

- Frontend: set RPC URL and deployer/private key in .env (e.g., VITE_RPC_URL, VITE_PRIVATE_KEY)
- Contracts: configure remappings and network settings in foundry.toml if deploying to testnets/mainnet

## Deploy

- Use Foundry scripts or forge script for deployment:
  - forge script Script/Deploy.s.sol --fork-url <RPC> --private-key <KEY> --broadcast

## Testing

- Unit tests: `forge test`
- Local integrations: run anvil and point frontend to local RPC, or run integration tests with foundry scripts

## Contributing

- Open PRs for fixes or features
- Keep tests passing via `forge test` and lint frontend code

## License

- Add a LICENSE file as needed

If you need example contracts, deployment scripts, or a sample frontend integration, request the specific files to generate.
