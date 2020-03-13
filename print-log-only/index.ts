import http = require('http');
import env = require('env-var')

var port = process.env.port || 80;

http.createServer(function (req, res) {

  switch (req.url) {
    case ("/hello-world"):
      console.log("hello world. 」(￣▽￣」)");
      res.end("We say hello world.");
      break;

    case ("/spam-log"):
      var i: number = 0;

      var emoji: string[] = [
        "(/▽＼)", 
        "(～o￣3￣)～",
        "( $ _ $ )",
        "╰(￣ω￣ｏ)",
        "⊙.☉",
        "(＠_＠;)",
        "(❁´◡`❁)",
        "(づ￣ 3￣)づ",
        "(´▽`ʃ♡ƪ)",
        "o((>ω< ))o"];

      while (i < 10) {
        console.log("spam log: " + emoji[i]);
        i++;
      }
      
      res.end("End spam log")
      break;

    case ("/multi-line-single-log"):
      console.log("single (╯°□°）╯︵ ┻━┻\nline ┳━┳ ノ( ゜-゜ノ)\nlog (╯°□°）╯︵ ┻━┻");
      res.end("Single line log completed");
      break;

    case ("/multi-line-spam-log"):
      var i: number = 0;
      
      while (i < 10) {
        console.log("spam (╯°□°）╯︵ ┻━┻\nlog ┳━┳ ノ( ゜-゜ノ)\n. ─=≡Σ((((╯°□°）╯︵ ┻━┻ " + i.toString())
        i++;
      }
      res.end("Spam multi line complete");
      break;

    case ("/"):
      console.log("I'm on. ヾ(＾∇＾)");

      var useText: String = "/hell-world: print hello world \n" +
                            "/spam-log: Spam log (Single line) \n" +
                            "/multi-line-single-log: Print multiline single log (One time) \n" +
                            "/multi-line-spam-log: Spam multiline single log \n" +
                            "/get-env: get TEST_ENV value"

      res.end(useText);
      break;

    case ('/get-env'):
      console.log("env: " + env.get('TEST_ENV').asString())

      res.end("env: " + env.get('TEST_ENV').asString())
      break;
  };

  console.log("It's done. (≧∀≦)ゞ")

}).listen(port);

console.log('Server start at ' + port)