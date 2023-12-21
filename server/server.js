const {mongoClient} = require('mongodb').MongoClient

async function main(){
  const uri = "mongodb+srv://hardeep731:Admin%40123@cluster0.z8hdbnq.mongodb.net/"
  const client =  mongoClient(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
      })
  try {
    await client.connect();

    await listDatabases(client);
 
} catch (e) {
    console.error(e);
}
finally {
  await client.close();
}
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
main().catch(console.error);
