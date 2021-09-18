import EventEmitter from "eventemitter3";
import Application from "./Application";

export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super()

    let num = 0;

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    setInterval(() => {
      console.log("bit");

      if (num == 6) {
        num = 0;
      }

      let a = document.createElement('div');
      a.classList.add('message');

      for (let i = 0; i < 1; i++) {

        const element = lyrics[num];

        document.querySelector(".main").appendChild(a);

        a.innerHTML = element;

        this.emit(Beat.events.BIT);

        this.emit('listen', Beat.events.BIT);

        num = num + 1;
      }


    }, 600);


  }
}