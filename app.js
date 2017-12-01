console.log('app loaded!');

var dogModule = (function() {
    function bark(name) {
        console.log(name + ' is barking');
    }

    // Reveal bark through public pointer speak
    return {
        speak: bark
    };
})();

var catModule = (function() {
    function meow(name) {
        console.log(name + ' is meowing');
    }

    // Reveal meow through public pointer speak
    return {
        speak: meow
    };
})();

// invoke speak for each module
dogModule.speak('Brie');
catModule.speak('Kittie');

// inject module dependencies
var petOwner = (function(dogModule, catModule){
    dogModule.speak('Lightening');
    catModule.speak('Pussy');
})(dogModule, catModule);