'use strict';

var os = require('os');

module.exports = function getIpAddress() {
  var ifaces = os.networkInterfaces();
  var arr = [];
  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      var ret = {
        address: iface.address
      };
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        ret.name = ifname + ':' + alias;
        // console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        ret.name = ifname;
        // console.log(ifname, iface.address);
      }

      arr.push(ret);
      ++alias;
    });
  });
  return arr;
}