npm install redis
import redis from 'redis';
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: 'yourpassword' // si tienes habilitada la autenticación
  });
  
redisClient.set('key', 'value', (err, reply) => {
    console.log(reply);
  });
  
  redisClient.get('key', (err, reply) => {
    console.log(reply);
  });
  

