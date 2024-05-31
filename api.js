function troca(){
    var n = document.getElementById('n')
    n.innerHTML = `SIM`
    n.style.background = '#23f045'

    var s = document.getElementById('s')
    s.innerHTML = `NÃO`
    s.style.background = '#f32d1f'
}

function troca2() {
    var s = document.getElementById('s')
    s.innerHTML = `SIM`
    s.style.background = '#23f045'

    var n = document.getElementById('n')
    n.innerHTML = `NÃO`
    n.style.background = '#f32d1f'
}

function clique() {
    var a = document.getElementsByClassName('sec')[0]
    a.style.display = 'none'
    var b = document.getElementsByClassName('sec')[1]
    b.style.display = 'none'
    var meuVideo = document.getElementById('meuVideo')
    meuVideo.style.display = 'flex'
    meuVideo.setAttribute('src', 'Happy Happy Song velocized 32x.mp4')
    var c = document.getElementById('h1')
    c.innerHTML = `EU TAMBÉM TE AMO!!!!`
}