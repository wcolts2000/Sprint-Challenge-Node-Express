const server = require("./api/server.js");
const PORT = process.env.PORT || 8081;

server.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));
