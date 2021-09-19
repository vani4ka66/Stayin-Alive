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

    setInterval(() => {
      console.log("bit");

        this.emit(Beat.events.BIT);

        this.emit('listen', Beat.events.BIT);

    }, 600);
  }
}