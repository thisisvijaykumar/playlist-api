import MainRoute from './main';
import {Application,Request,Response} from 'express';
import {PlaylistCtrl} from '../controller';

class PlaylistRoute extends MainRoute{
    public constructor(app:Application){
        super();
        this.app=app;
        this.path="/playlist";
        this.Controller=new PlaylistCtrl();

        /**
         * All Defined Routes
         */
        this.get();
        this.getAll();
        this.post();
        this.update();
        this.delete();
        this.shuffle();
    }
    public shuffle(){
        this.app.get(this.path+"/shuffle/:id",(req:Request,res:Response)=>{
            this.Controller.shuffle(req,res);
        })
    }
}

export default PlaylistRoute;
