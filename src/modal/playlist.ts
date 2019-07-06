import {PlaylistSchemas} from '../schemas';
import MainModel from './main';

class PlaylistModel extends MainModel{
    constructor(){
        super();
        this.Schema=PlaylistSchemas;
    }
}
export default PlaylistModel;