function Print() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(Print, 1000); //1000 ms in 1s