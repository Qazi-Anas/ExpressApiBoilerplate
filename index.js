const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({
    path: './.env'
})

app.listen(process.env.PORT, () => {
    console.log(`App is listen to port ${process.env.PORT}`)
})