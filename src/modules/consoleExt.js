// ログ表示したくないENVを記述
const IGNORE_ENV = ["production"];

const consoleExt = {};

//logger変数にconsole関数をセット
consoleExt.logger = console.log;
consoleExt.warnLogger = console.warn;
consoleExt.errorLogger = console.error;

consoleExt.checkShowEnv = function(){
  for(let i = 0; i < IGNORE_ENV.length; ++i){
    if(IGNORE_ENV[i] === process.env.NODE_ENV){
      return false;
    }
  }
  return true;
}

consoleExt.log = function(message,...opt){
  if(consoleExt.checkShowEnv()){
    consoleExt.logger(message,...opt);
  }
}

consoleExt.warn = function(message,...opt){
  if(consoleExt.checkShowEnv()){
    consoleExt.warnLogger(message,...opt);
  }
}
consoleExt.error = function(message,...opt){
  if(consoleExt.checkShowEnv()){
    consoleExt.errorLogger(message,...opt);
  }
}

// デフォルトのconsole関数を使わないようにする
console.log = consoleExt.log;
console.warn = consoleExt.warn;
console.error = consoleExt.error;

export default consoleExt;
