async function main() {
    const Factory = await ethers.getContractFactory("UniswapV2Factory");
    // Start deployment, returning a promise that resolves to a contract object
    const options = { gasPrice : 30000000000, gasLimit : 3000000 };
    const factory = await Factory.deploy("0xF12C97e03E3b6E191de1678Ba908591107611141");
    await factory.deployed();
    console.log("Contract deployed to address:", factory.address);
    factory.createPair("0x4aE29d3CeF85e8F98EaF083C453d5F99e5579304", "0x63715B40bFFB0F53f0C27312C29C750DaA51C590");
    factory.createPair("0x4aE29d3CeF85e8F98EaF083C453d5F99e5579304", "0x2b2C75D8669d3059b43A0535e3e00230f4B33da3");
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });