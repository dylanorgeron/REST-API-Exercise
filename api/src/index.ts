import express from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'

const app = express();
app.use(cors())

app.get('/getTime', function (req, res) {
   res.send(new Date().getTime().toString());
})

const server = app.listen(8081, () => {
    const addressInfo = server.address() as AddressInfo
   const host = addressInfo?.address
   const port = addressInfo?.port
   
   console.log("Example app listening at http://%s:%s", host, port)
})