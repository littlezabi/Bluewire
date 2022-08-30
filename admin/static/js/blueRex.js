"use strict";
const blueRex = {
  get: (u, d, async = true) => {
    let x = new XMLHttpRequest();
    let method = "GET";
    let data = d ? d : {};
    return new Promise((a, b) => {
      x.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            let t = this.response;
            a(t);
          } else {
            b(this.response);
          }
        }
      };
      x.open(method.toUpperCase(), u, async);
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      x.send(u);
    });
  },
  post: (u, d, async = true) => {
    let x = new XMLHttpRequest();
    let method = "POST";
    let data = d ? d : {};
    const setParams = (d_) => {
      let p = "";
      for (let k in d_) p += k + "=" + d_[k] + "&";
      console.log(p);
      return p;
    };
    return new Promise((a, b) => {
      x.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            let t = this.response;
            a(t);
          } else {
            b(this.response);
          }
        }
      };
      x.open(method.toUpperCase(), u, async);
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      x.send(setParams(data));
    });
  },
};
