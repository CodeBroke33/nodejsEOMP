import { userRouter,express } from "./controller/UserController.js";


const app = express()
const port = +process.env.PORT || 5500

app.get('/', (req, res) => {
  res.send('Express API');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
