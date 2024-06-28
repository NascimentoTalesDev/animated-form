const squares = document.querySelector(".squares")

for (let i = 0; i < 10; i++) {
    
    let li = document.createElement('li')
    const random = (max,min) => Math.random()*(max - min) + min;

    const size = Math.floor(random(120, 40))
    const position = Math.floor(random(100, 0))
    const delay = Math.floor(random(10,0.5))
    let duration = Math.floor(random(12, 6));

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = -`${size}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`

    squares.appendChild(li)
    document.querySelector("body").style.overflow = "hidden"
}