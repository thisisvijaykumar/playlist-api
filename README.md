# Playlist API
A mini application based on the MongoDB database design and Express.js framework.

This App code use 
- Express.js framework
- mongoose ORM
- Typescript

### How to use:

1.To install all denpendcies
```
npm install --save
```
2.Replace DB_URL with your own cloud based MongoDB Url in the .env file

### To Shuffle Playlist:

I have used below function to shuffle the playlist
```
function shuffle(arr){
    let len=arr.length,index,temp;
            while(len>1){
                index=Math.floor(Math.random()*len);
                len--;
                temp=arr[len];
                arr[len]=arr[index];
                arr[index]=temp;
            }
    return arr;
}

```
