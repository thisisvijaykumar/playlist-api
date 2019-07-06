import {Request,Response} from 'express';
import {PlaylistModel} from '../modal';
import MainCtrl from './main';

class PlaylistCtrl extends MainCtrl{
    constructor(){
        super();
        this.Model=new PlaylistModel();
        this.Module="Playlist";
    }

    public async shuffle(req:Request,res:Response){
        try{
            const query={_id:req.params.id};
            const data=await this.Model.get(query);
            if(!data || !data["videos"]){
                res.send(data);
                return;
            }
            let len=data["videos"].length,index,temp;
            while(len>1){
                index=Math.floor(Math.random()*len);
                len--;
                temp=data["videos"][len];
                data["videos"][len]=data["videos"][index];
                data["videos"][index]=temp;
            }
            res.send(data);

        }catch(error){
            res.send(error);
        }
    }
}

export default PlaylistCtrl;
