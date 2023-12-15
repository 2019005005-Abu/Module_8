const express=require('express')
const app=express();
const port=process.env.PORT || 5000;
const cors=require('cors');
const dotenv=require('dotenv');
const mongodb=require('mongodb')
dotenv.config();
//Ema_Jhon
//RXEWeJYtsSBaEy7X
app.use(cors());
app.use(express.json());
app.get('/',function(req,res){
    res.send(`Ema is doing Shopping`)
})
//mogodb starts from here

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.EMaJhon_UserNam}:${process.env.EmaJgon_Password}@rifat2019005005.5hcwziz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productCollcetion=client.db('emajhon_db').collection('products');

    app.get('/products',async function(req,res){
        console.log(req.query);
        const page=parseInt(req.query.page) || 0;
        const limit=parseInt(req.query.limit) || 10;
        const skip=page * limit;
        const result=await productCollcetion.find().skip(skip)
        .limit(limit).toArray();
        res.send(result);
    })
  //  ProductsBy_id
  app.post('/productsById',async function(req,res){
    const ids=req.body;
    const ObjectIds=ids.map(id=>new mongodb.ObjectId(id))
    const query={_id:{
      $in:ObjectIds
    }}
    console.log(ids);
    const result=await productCollcetion.find(query).toArray();
    res.send(result);
  })
  app.get('/totalProductsCount',async function(req,res){
    const result=await productCollcetion.estimatedDocumentCount();
    res.send({totalProducts:result})
  })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB Database Succesfully Connceted");
  } finally {
    
  }
}
run().catch(console.dir);

//mongodb ends from here
app.listen(port,function(){
    console.log(`Server is Running at ${port}`)
})