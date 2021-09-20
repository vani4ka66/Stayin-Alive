import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    this.num = 0;
    this._beat = new Beat();
    this.ll = lyrics;

    this._create()

    this._beat.addListener('listen', () => {

      if (this.num == 6) {
        this.num = 0;
      }

      let a = document.createElement('div');
      a.classList.add('message');

      for (let i = 0; i < 1; i++) {

        const element = lyrics[this.num];

        document.querySelector(".main").appendChild(a);

        a.innerHTML = element;

        this.num++;
      }

    })

    this.emit(Application.events.READY);
  }

  _create() {

    let a = document.createElement('div');
    a.classList.add('message');

    // const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    // this._beat.on('listen', () => {

    //   if (this.num == 6) {
    //     this.num = 0;
    //   }

    //   let a = document.createElement('div');
    //   a.classList.add('message');

    //   for (let i = 0; i < 1; i++) {

    //     const element = lyrics[this.num];

    //     console.log(this.num)

    //     document.querySelector(".main").appendChild(a);

    //     a.innerHTML = element;

    //     this.num++;
    //   }

    // })

  }
}