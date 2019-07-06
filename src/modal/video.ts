import {VideoSchemas} from '../schemas';
import MainModel from  './main';

class VideoModel extends MainModel{
    constructor(){
        super();
        this.Schema=VideoSchemas;
    }
}

export default VideoModel;