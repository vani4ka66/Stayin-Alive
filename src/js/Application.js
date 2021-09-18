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
    this._beat = new Beat();
    this.ll = lyrics;

    this._create()

    // const message = document.createElement("div");
    // message.classList.add("message");
    // message.innerText = "Ah";

    // document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
  }

  _create(){

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];


    let b = new Beat();

  

    b.on('listen', () => {


        this.emit('listen', Beat.events.BIT);
      

    })

  }
}
