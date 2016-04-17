export default class Json {
    constructor(url){
        this.url = url;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            console.log(this.readyState);
            if( this.readyState === 4 ){
                return this.responseText;
                console.log(this.responseText);
            }
        };
        request.open('GET', this.url, true);
        request.send();
    }
}