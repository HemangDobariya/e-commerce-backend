const  express= require("express")
const app = express()
const port = 3000
const db = require("./server/config/connection")
const path = require("path")
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'server', 'public', 'images'))); 

const userRoute = require("./server/routes/users.routes")
const sellerRoute = require("./server/routes/seller.routes")
const promoRoute = require("./server/routes/promo.routes")
const addressRoute = require("./server/routes/address.routes")

app.use("/user", userRoute);  
app.use("/seller",sellerRoute)
app.use("/promo",promoRoute)
app.use("/address",addressRoute)

// testing route
app.get("/add",(req,res)=>{
    res.json({msg:"this is api"})
})

app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
}
)   