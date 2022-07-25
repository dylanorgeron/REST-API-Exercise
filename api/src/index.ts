import express from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'

const recipes = [
   {
      id: 1,
      name: "PB&J",
      description: "Its a sandwich"
   },
   {
      id: 2,
      name: "Mac and cheese",
      description: "Its not a sandwich"
   }
]

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/getTime', function (req, res) {
   res.send(new Date().getTime().toString());
})

app.get('/getRecipe/:id', function (req, res) {
   console.log(req.body);
   res.send(recipes[(req.query.id as number)]);
})

app.get('/getRecipes', function (req, res) {
   res.send(recipes);
})

app.post('/addRecipe', (req, res) => {
   let recipe = {
      id: recipes.length + 1,
      name: req.body['data[name]'],
      description: req.body['data[description]']
   }
   recipes.push(recipe);
   console.log(req.body);
   res.send(req.body);
})

const server = app.listen(8081, () => {
    const addressInfo = server.address() as AddressInfo
   const host = addressInfo?.address
   const port = addressInfo?.port
   
   console.log("Example app listening at http://%s:%s", host, port)
})