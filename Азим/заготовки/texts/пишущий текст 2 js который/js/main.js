
var string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae! At quam quo tempora, optio excepturi quas minus dolorem vero?";
var str = string.split("");
var el = document.getElementById('str');
(function animate(){
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate,90) 
})();