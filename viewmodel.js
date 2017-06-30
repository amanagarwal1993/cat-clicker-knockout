var cats = [
        {
            name: 'Tom',
            catUrl: 'http://placekitten.com/601/350',
            clickCount: 0,
            nicknames: ['Tommy', 'Timothy']
        },

        {
            name: 'Jerry',
            catUrl: 'http://placekitten.com/602/350',
            clickCount: 0,
            nicknames: ['Jerico', 'Jose']
        },

        {   
            name: 'Rally',
            catUrl: 'http://placekitten.com/603/350',
            clickCount: 0,
            nicknames: ['Ralph', 'Raphael']
        },

        {
            name: 'Lex',
            catUrl: 'http://placekitten.com/604/350',
            clickCount: 0,
            nicknames: ['Lexicor', 'Lucifer']
        },

        {
            name: 'Manoj',
            catUrl: 'http://placekitten.com/605/361',
            clickCount: 0,
            nicknames: ['Mandy', 'Maddox']
        }
      ];


var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.catUrl = ko.observable(data.catUrl);

  this.level = ko.computed(function() {
    if (this.clickCount() < 5) {
      return "Newborn";
    }    
    else if ((this.clickCount() >= 5) && (this.clickCount() < 10)) {
      return "Infant";
    }
    else if (this.clickCount() >= 10) {
      return "Teen";
    }
  }, this);
  
  this.nicknames = ko.observableArray(data.nicknames);

};

var myViewModel = function() {
  
  var self = this;
  
  self.catList = ko.observableArray();
  
  cats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  })
  
  this.currentcat = ko.observable( self.catList()[0] );
  console.log(self.catList()[0]);
  
  this.incrementClicks = function() {
    this.clickCount(this.clickCount() + 1);
  };
  
  this.updateCat = function(cat) {
    self.currentcat(cat);
  }
};

ko.applyBindings(new myViewModel);