import 'dotenv/config'
import fastify from "./fastify"

const startServer = () => {
  try {
    fastify.listen({ port: parseInt(process.env.SERVER_PORT || "4000"), host: process.env.SERVER_HOST }, (err, address) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1)
      }
    });
  } catch (err: unknown) {
    fastify.log.error(err, `Failed to start the server`);
    process.exit(1);
  };
};

export default startServer;