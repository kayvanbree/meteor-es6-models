### scuba:models
scuba:models is a package that utilizes ECMAScript2015 to add a model layer to Meteor. To use this just extend ScubaModel:

```javascript
Artists = new Mongo.Collection("artists");

class Artist extends ScubaModel {
  constructor(name, genre, status, notes){
    super("artists", Artists);

    this.name = name;
    this.genre = genre;
    this.status = status;
    this.notes = notes;
  }
}

this.Artist = Artist;
```
