function stars() {
    let count = 500;
    let scene = document.querySelector('.scene');
    
    for(let i = 0; i < count; i++) {
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        star.style.animationDuration = 10 + duration + 's';

        scene.append(star)
    }
}
stars()