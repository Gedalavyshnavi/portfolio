let express= require("express");
let app = express();
app.use(express.json());
let studentTour = require("./CONTROLLERS/studentTour");
app.get("/student top tours",studentTour.getTopTours);
app.get("/student tours",studentTour.getTours);
module.exports={app};
