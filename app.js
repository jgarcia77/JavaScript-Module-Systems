console.log('app loaded!');

require(['./counter.js'], function(counter) {
    console.log(counter.getValue());
    counter.increment();
    console.log(counter.getValue());
    counter.decrement();
    console.log(counter.getValue());

    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getValue());
});