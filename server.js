const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())
app.use('/images', express.static('images'))

const characters = { 
        "details": [
            {
                'fullname': 'Sir Reginald Hargreeves',
                'nickname': 'The Monocle',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/reginaldhargreeves.jpg'
            },
            {
                'fullname': 'Luther Hargreeves',
                'nickname': 'Number One',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/lutherhargreeves.jpg'
            },
            {
                'fullname': 'Diego Hargreeves',
                'nickname': 'Number Two',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/diegohargreeves.jpeg'
            },
            {
                'fullname': 'Allison Hargreeves',
                'nickname': 'Number Three',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/allisonhargreeves.jpg'
            },
            {
                'fullname': 'Klaus Hargreeves',
                'nickname': 'Number Four',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/klaushargreeves.jpeg'
            },
            {
                'fullname': 'unnamed',
                'nickname': 'Number Five',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/numberfivehargreeves.jpg'
            },
            {
                'fullname': 'Ben Hargreeves',
                'nickname': 'Number Six',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/benhargreeves.png'
            },
            {
                'fullname': 'Vanya Hargreeves',
                'nickname': 'Number Seven',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/vanyahargreeves.jpeg'
            },
            {
                'fullname': 'The Conductor',
                'nickname': 'conductor',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/theconductor.jpeg'
            },
            {
                'fullname': 'Dr. Terminal',
                'nickname': 'terminal',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/drterminal.jpeg'
            },
            {
                'fullname': 'Hazel and Cha-Cha',
                'nickname': 'none',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/hazelandchacha.jpeg'
            },
            {
                'fullname': 'Atlas Jericho "A. J." Carmichael',
                'nickname': 'A.J',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/ajcarmicheal.jpg'
            },
            {
                'fullname': 'Dr. Phinneus Pogo',
                'nickname': 'pogo',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/pogo.jpeg'
            },
            {
                'fullname': 'Grace Hargreeves',
                'nickname': 'Grace',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/gracehargreeves.jpg'
            },
            {
                'fullname': 'The Handler',
                'nickname': 'handler',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/thehandler.jpeg'
            },
            {
                'fullname': 'Leonard Peabody',
                'nickname': 'Harold Jenkins',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/leonard.jpeg'
            },
            {
                'fullname': 'Lila Pitts',
                'nickname': 'lila',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/lilapitts.jpeg'
            },
            {
                'fullname': 'Raymond Chestnut',
                'nickname': 'raymond',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/raymondchestnut.jpeg'
            },
            {
                'fullname': 'Sissy Cooper',
                'nickname': 'sissy',
                'image': 'https://umbrella-academy-api.herokuapp.com/images/sissycooper.jpeg'
            }
        ]
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    if (characters) {
        return response.json(characters)
    } else {
    response.json(characters[unknown])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}. Betta Catch It`)
})