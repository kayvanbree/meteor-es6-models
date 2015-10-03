// Write your package code here!
var ScubaCollections = {};

class ScubaModel {
  constructor(className, collection){
    this._className = className;
    ScubaCollections[className] = collection;
  }

  save(){
    ScubaCollections[this._className].insert(this);
  }

  remove(){
    ScubaCollections[this._className].remove(this);
  }
}

this.ScubaModel = ScubaModel;
