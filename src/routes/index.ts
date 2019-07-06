import PlaylistRoute from './playlist';
import VideoRoute from './video';
import { Application } from 'express';


class Route{
    public static active(app:Application){
        new PlaylistRoute(app);
        new VideoRoute(app);
    }
}

export default Route;