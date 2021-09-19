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

    // const message = document.createElement("div");
    // message.classList.add("message");
    // message.innerText = "Ah";

    // document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
  }

  _create() {

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    let b = new Beat();

    b.on('listen', () => {

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

  }
}