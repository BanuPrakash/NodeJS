import express, { Request, Response} from 'express';
import doTask from '@share/lib';

const app = express();

app.get("/", (req:Request, res:Response) => {
    res.send(doTask());
});

app.listen(1234, () => console.log("started server!!!"));