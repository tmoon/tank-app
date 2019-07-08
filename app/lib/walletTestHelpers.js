const terra = require('@terra-money/core');

async function print_stuff() {
    // const mnemonic = terra.generateMnemonic();
    mnemonic = "cake glide style agent panda noble comfort double suffer hope spare sting trend trophy salt estate riot sight monitor shoulder orphan veteran vendor forward"
    const masterKey = await terra.deriveMasterKey(mnemonic)
    const keypair = terra.deriveKeypair(masterKey)
    const accAddr = terra.getAccAddress(keypair.publicKey)

    console.log(mnemonic, masterKey, keypair, accAddr)
}

print_stuff()
