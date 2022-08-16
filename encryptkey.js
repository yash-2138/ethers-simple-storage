const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main(){
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey =  await wallet.encrypt(
    process.env.PASSWORD,
    process.env.PRIVATE_KEY
  ); // this will return an encrypted that can be stored locally and can only be decrypted with password
  console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey); //saves it to a new json file
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });