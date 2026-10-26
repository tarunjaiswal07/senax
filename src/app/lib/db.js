

// const {username, password} = process.env;
//  export const connectionString ="mongodb+srv://" + username + ":" + password + "@cluster0.tblkiho.mongodb.net/senaxDB?appName=Cluster0"
// const username = "senaxindia_db_user";
// const password = "Tarun2007";
// export const connectionString = "mongodb+srv://"+username+":"+password+"@cluster0.f227nmq.mongodb.net/senaxDB?retryWrites=true&w=majority&appName=Cluster0";

const { MONGO_USER, MONGO_PASS } = process.env;

export const connectionString =
  `mongodb://${MONGO_USER}:${encodeURIComponent(MONGO_PASS)}@` +
  `ac-vdst2qw-shard-00-00.f227nmq.mongodb.net:27017,` +
  `ac-vdst2qw-shard-00-01.f227nmq.mongodb.net:27017,` +
  `ac-vdst2qw-shard-00-02.f227nmq.mongodb.net:27017/senaxDB` +
  `?ssl=true&replicaSet=atlas-10atdo-shard-0&authSource=admin&retryWrites=true&w=majority`;
