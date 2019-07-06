import MainRoute from './main';
import {Application} from 'express';
import {VideoCtrl} from '../controller';

class VideoRoute extends MainRoute{
    public constructor(app:Application){
        super();
        this.app=app;
        this.path="/video";
        this.Controller=new VideoCtrl();

        /**
         * All Defined Routes
         */
        this.get();
        this.getAll();
        this.post();
        this.update();
        this.delete();
    }
}

export default VideoRoute;