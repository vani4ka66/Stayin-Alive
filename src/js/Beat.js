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

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    setInterval(() => {
      // console.log("bit");

      for (let i = 0; i < lyrics.length; i++) {
        const element = lyrics[i];

        let a = document.createElement('div');
        a.classList.add('message');
        let main = document.getElementsByClassName('main')[0];
        main.appendChild(a)
       
        a.innerHTML = lyrics[i]

        this.emit('listen', Beat.events.BIT);
        
      }

    }, 600);


  }
}
