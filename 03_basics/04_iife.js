// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connected`);
    
})();

// simple iffe, parameterd iffe
( (name)=>{
    console.log(`DB Connected Two ${name}`);
} )('sadab')