const os = require("os");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("System Uptime (seconds):", os.uptime());
console.log("CPU Information:", os.cpus());
console.log("Total Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());
console.log("Free Memory (bytes):", os.freemem() / (1024 * 1024 * 1024));
console.log("Network Interfaces:", os.networkInterfaces());
console.log("User Info:", os.userInfo());
console.log("Load Average:", os.loadavg());
console.log("Endianness:", os.endianness());
console.log("Temporary Directory:", os.tmpdir());
console.log("Constants:", os.constants);
console.log("hostname", os.hostname());