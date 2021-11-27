const jwt = require("jsonwebtoken");
const serverPassword = "kahinikashyap";
var payload = {email:"admin@admin.com"};
var token = jwt.sign(payload, serverPassword);
console.log(token);

var token1 = "eyJhbGdiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTYzMTAxNTIyMH0.YEojoYCYX9slm5PEmB6VKSUq3ZG1ECNStMaKcDNhAps";
var k = jwt.verify(token1, serverPassword);
console.log(k);
