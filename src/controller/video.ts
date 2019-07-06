import {VideoModel} from '../modal';
import MainCtrl from './main';

class VideoCtrl extends MainCtrl{
    constructor(){
        super();
        this.Model=new VideoModel();
        this.Module="Video";
    }
}

export default VideoCtrl;
