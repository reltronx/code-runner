var runner = require('./modules/code-runner');

runner("#include <stdio.h>\nint main(){while(true){printf(\"yo\");}return 1;}",{
    language:"C",
    input:"shrikanth",
    timeout:100
},function(err,data){
    if(err) throw err;
    console.log(data);
});