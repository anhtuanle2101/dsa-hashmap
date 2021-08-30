const LinkedList = require('./linkedlist');

class HashMap{
    constructor(){
        this._items = [];
        this.length = 0;
        this.maxArrayLength = 50;
    }

    hash(key){
        const PRIME = 31;
        return Array.from(key).reduce((accum, next)=> accum*PRIME + next.charCodeAt(), 0) % this.maxArrayLength;
    }

    set(key, val){
        const hashIdx = hash(key);
        if (!this._items[hashIdx]){
            this._items[hashIdx] = val;
        }else{
            this._items[hashIdx] = new LinkedList([this._items[hashIdx]]);
            this._items[hashIdx].push(val);
        }
    }

    get(val){

    }

    delete(key){

    }

    has(key){

    }

    keys(){

    }

    values(){

    }

    entries(){

    }
}

module.exports = HashMap;