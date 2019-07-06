import * as bodyParser from "body-parser";
import * as express from "express";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import Route from "./routes";
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    /** Call the config */
    this.config();
    /** Call the db connect */
    this.dbConnect();
    Route.active(this.app);
  }
  private config(): void {
    /** To enable get json GET request data */
    this.app.use(bodyParser.json());

    /** config the environment variable */
    dotenv.config();
    dotenv.config({ path: "../.env" });

    /** To enable get json POST request data */
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }
  /** for db connect */
  public async dbConnect() {
    (<any>mongoose).Promise = global.Promise;
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);
    mongoose
      .connect(
        process.env.DB_URL,
        { useNewUrlParser: true }
      )
      .then(() => {
        // if all is ok we will be here
      })
      .catch(err => {
        // if error we will be here
        console.error("Unable to Connect Database");
        console.warn("Sproworks Going to Shutdown");
        console.log(err.stack);
        process.exit(1);
      });
  }
}

export default new App().app;
