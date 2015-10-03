### scuba:models
scuba:models is a package that utilizes ECMAScript2015 to add a model layer to Meteor. To use this just extend ScubaModel:

```javascript
var Animals = Mongo.Collection('animals');

class Animal extends ScubaModel {
  constructor(name) {
    super(Animals);
    this.name = name;
  }

  get name(){
    return this.name;
  }

  set name(value){
    this.name = value;
  }

  doSomething(){
    console.log(this.name + ": I'm doing something");
  }
}
```
