# 🌱 Project Info - Get to know us!
**Project Name:** Care Pledge

**Description of Solution:** Solving access to specialized medical services for Sickle Cell disease patients from Africa (e.g. Nigeria) requiring overseas (e.g. Singapore, India, South Africa) treatment via Public Goods funding utilizing blockchain technology. Aims to empower donors by providing transparency of usage of funds while repurposing additional funds (Regenerative).

**Team Members:**
- Aheesh [GitHub](https://github.com/Aheesh)
- Bailey [GitHub](https://github.com/baileyspraggins)
- Sohee [GitHub](https://github.com/sohekim)
- Darren [GitHub](https://github.com/DChan0319)
- RH [GitHub](https://github.com/PrintRH)

# 📖 Team Participation

**Team Name:** Care Pledgoors

**EY Workshop Attendees:**
- Aheesh
- Darren
- RH

# 🎨 Network Design

Care Pledge interacts with Allo Protocol - an open-source protocol which is deployed on Ethereum. This code heavily utilizes [Allo Docs](https://github.com/allo-protocol/allo-v2) in its development. Since Allo Protocol is maintained on Ethereum, this code is written in Solidity (code: [Care Pledge Code](https://github.com/baileyspraggins/care-pledge)) in order to have this code deployed on the Ethereum network.

CP Network: Ethereum [Allo Contracts](https://docs.allo.gitcoin.co/overview/contracts)

# 🏛️ CP Design

## Why Privacy?

At the core of healthcare systems, privacy serves as the bedrock of trust between patients and healthcare providers. It ensures that sensitive information such as genetic data, diagnoses, treatment plans are safeguarded from malicious use. The protection of patient's privacy fosters open communication, which empowers patients to share critical information honestly to their healthcare professionals. By maintaining robust privacy safeguards, healthcare systems also indirectly achieves the capability to comply with legal requirements at a global scale - which ultimately contribute to high quality patient treatments.

## Solving Privacy 

Before we take a deep dive into privacy solutions, let's quickly recap the top three problems that Care Pledge would need to address in order to seamlessly integrate this service for users in Africa while complying to national health regulations.
1. Families or patients have limited resources to pay for services (Need cheap fees when interacting with the blockchain).
2. Care Pledge needs a platform to create a network of reputable affiliates and registered users to prevent fraudulent or abuse towards healthcare system.
3. Information verified by healthcare practitioners (HCP) needs to be kept confidential while providing proofs to donors (funding transparency).

Considering the available privacy blockchain solutions out there such as Aztec, Secret Network, and Nightfall 3 - we would argue that Nightfall 3 offers the most compelling solution that best fits our needs. For starters, Nightfall 3 is designed to be compatible with the Ethereum network - where Care Pledge is deployed. In this latest iteration, Nightfall 3 was also recognized for its low cost and high efficiency as it aggregates all ZK Proofs into optimistic rollups. This drastically decreases the high gas computational costs from ZK Proof transactions, thus lowering network fees which goes a long way for economically challenged users. Next, Nightfall 3 is designed as an enterprise solution. This perfectly fits our need to connect a large network of affiliates and users, while handling large amount of transactions. Supplementing our experiences in the Healthcare sector, we see huge value in adopting Nightfall 3's technology since it offers strong security through its rigorous audits and fraud detection. 

![image](https://github.com/baileyspraggins/care-pledge/assets/93211672/5d03272a-7666-4dbd-ad4a-7a6bba27d576)

## Architecture

LayerZero, specifically Polyhedra's zkLightClient technology is used to bridge between Ethereum and Nightfall 3. 

![image](https://github.com/baileyspraggins/care-pledge/assets/93211672/848a00a9-f278-4a46-b520-99a0c50e23e7)







