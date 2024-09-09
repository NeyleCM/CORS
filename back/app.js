const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try {
        const response = await axios.get(url)
        const {name, sprites: {front_default} , height, weight} = response.data

        res.json({name, sprites: {front_default} , height, weight})
    } catch (ERROR) {
        res.status(404).json({ ERROR: 'Pokemón no encontrado'})
    }
})

app.listen(3002, () => {
    console.log('Express está escuchando en el puerto http://localhost:3002');
    
})
