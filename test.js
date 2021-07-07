const petPetGif = require('./index')
const fs = require('fs')

const petCommandExample = async (param) => {
    let animatedGif = await petPetGif.bonk(
      'https://cdn.discordapp.com/avatars/403040446118363138/3f7a2167dbce43bab9906880a2c236e8.png?size=1024'
    )

    fs.writeFile('idi_nahui.gif', animatedGif, function (err) {
        console.log('Cyka blyat! An error occurred!')
    })
}

petCommandExample();