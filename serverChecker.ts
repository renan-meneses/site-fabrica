function check(){
    let img = document.createElement('img');
    let _self:any = this;
    img.onload = _self.isOnline;
    img.onerror = _self.isOffline;
    img.src = 'http://localhost:3000/image/logo.svg';
}

function isOnline(){
    window.location.href = 'http://localhost:3000';
}

function isOffline() {
    console.log('OFF');
    setTimeout(() => { check(); }, 1000);
}

check();