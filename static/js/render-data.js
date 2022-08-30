import {
  exlinks,
  tline,
  xbody,
  pform,
  memory,
  renderAllItem,
  xmodal,
  tableElement,
} from "./html-elements.js";

class Render {
  device = [];
  modals = [];
  latest_devices = [];
  constructor(data, modals) {
    this.device = data;
    this.modals = modals;
    this.latest_devices = latest_devices;
    if (this.device.length > 0) {
      this.setElement("extra-links", "Extra Links", exlinks);
      this.setElement("timeline-1", "Timeline", tline);
      this.setElement("body-x", "Body", xbody);
      this.setElement("plateform", "Plateform", pform);
      this.setElement("memory", "Memory", memory);
      this.renderAll("more-details");
    }
    if (this.modals.length > 0) {
      this.renderModals("home-right-modals");
    }
    if (this.latest_devices.length > 0) {
      this.renderLatestDevices("x-table-body");
    }
  }
  renderLatestDevices(id) {
    try {
      let o = document.getElementById(id);
      console.log(o);
      o.innerHTML = "";
      this.latest_devices.map((e) => {
        o.innerHTML += tableElement(e);
      });
    } catch (error) {
      this.logError(error.message, "renderLatestDevices function ");
    }
  }
  show() {
    console.log(this.device);
  }
  renderModals(id) {
    try {
      let q = document.getElementById(id);
      q.innerHTML = "";
      this.modals.map((modal) => (q.innerHTML += xmodal(modal)));
    } catch (error) {
      this.logError(error.message, "renderModals function");
    }
  }
  renderAll(id) {
    try {
      const w = document.getElementById(id);
      w.innerHTML = "";
      this.device.map((item) => {
        try {
          if (item.name == "Extra Links") return;
          w.innerHTML += renderAllItem(item.name, item.values);
        } catch (error) {
          this.logError(error.message, "renderAll function try - 2");
        }
      });
    } catch (error) {
      this.logError(error.message, "renderAll function try - 1");
    }
  }
  setElement(id, item, render) {
    try {
      let t = this.Element(id);
      t.innerHTML = "";
      let i = this.device.filter((e) => e.name == item);
      i[0].values &&
        i[0].values[0].map((e, w) => {
          t.innerHTML += render(e, w, i[0].values[0].length);
        });
    } catch (e) {
      this.logError(e.message, "setElement function");
    }
  }
  logError(e, location = undefined) {
    console.error(location && location, " ", e);
  }
  Element(id) {
    return document.getElementById(id);
  }
}
export default Render;
