class Timer {
    id = null;
    active = false;
    constructor(callback, delay) {
        this.active = true;
        let wrap = ()=>{
            this.id = null;
            this.active = false;
            callback();
        }
        this.id = setTimeout(wrap.bind(this), delay*1000);
    }
    stop() {
        clearTimeout(this.id);
        this.active=false;
        this.id=null;
    }
}

export default Timer;
