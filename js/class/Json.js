/*export default class Json {
    constructor(url){
        this.url = url;
        var request = new XMLHttpRequest();
        request.open('GET', this.url, true);
        request.send();
        request.onreadystatechange = function(){
            console.log(this.readyState);
            if( this.readyState === 4 ){
                return this.responseText;
                console.log(this.responseText);
            }
        };
    }
}*/
var ajax = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
