let main = document.getElementById("main");
let arr = [
  
        "https://i.pinimg.com/236x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg",
        "https://i.pinimg.com/236x/0c/7b/13/0c7b13bcd5baa00302465893757b4466.jpg",
        "https://i.pinimg.com/236x/3f/72/2e/3f722e7be5a952584063a35048820e89.jpg",
        "https://i.pinimg.com/564x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg",
        "https://i.pinimg.com/236x/c0/ae/33/c0ae33873969f54a893b238c803841d8.jpg",
        "https://i.pinimg.com/236x/68/b2/8a/68b28a45865475f17f7139a7e88dff16.jpg",
        "poke.jpg",
        "https://i.pinimg.com/236x/fd/f5/62/fdf562aa3afef2367940aaaf4224220d.jpg"
  
    
];

let s = "";
for (let i = 0; i < 78; i++) {
    let r = Math.floor(Math.random() * 8);
    s += `<div class="card"><img src="${arr[r]}" alt="Image"></div>`;
}
main.innerHTML = s;
