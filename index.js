import express, { response } from 'express'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  try {
    const fileBuffer = readFileSync('./data.json')
    const fileText = fileBuffer.toString()
    const fileData = JSON.parse(fileText)

    res.send(fileData)

  } catch (error) {
      console.log("Algo inesperado ocorreu")
      res.status(500).send("Internal server error")
  }
})

app.post('/', (request, response)=> {
  try{
    const fileBuffer = readFileSync('./data.json')
    const fileText = fileBuffer.toString()
    const fileData = JSON.parse(fileText)

    // console.log(request.body)
    const playerIndex = highScores.findIndex(element => element.player === request.body.player)

    if(playerIndex === -1){
      highScores.push({
        player: request.body.player,
        score: request.body.score
      })
    } else if 

    // writeFileSync("./date.json", JSON.stringfy(fileData))

  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
