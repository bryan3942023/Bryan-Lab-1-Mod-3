export class Lab1{
 constructor(){

 }

   /* sinAcentos(text: string){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return text.split('').map( letra => acentos[letra] || letra).join('').toString();	
    }*/


  palindrome (text: string){
    //const string = this.sinAcentos(text).toString().toLowerCase();
    const string = text.toString().toLowerCase().replace(/ /g,"");
   // console.log("string " + string);
    const len = string.length;
    for (let i = 0, j = len - 1; i < j; ++i, --j) {
        if(string[i] !== " " && string[j] !== " "){
            //console.log("no vacio");
            
            if (string[i] !== string[j]) { 
                return false;
            }
        }
        //console.log("string 1" + string[i]);
        //console.log("string 2" + string[j]);
        
    }
    return true;
 }



 highestNumber (numbers : number[]){
    const arrayNumbers=numbers;
    let largest= 0;
    for (let i=0; i<arrayNumbers.length; i++){
        if (arrayNumbers[i]>largest) {
            largest=arrayNumbers[i];
        }
    }
    return largest;
 }

 arrayString(text:String): Array<String>{
    const string = text.toString().replace(/ /g,"");
    const len = string.length;
    let arraystr:string []=[];
    for (let i = 0; i < len; ++i) {
         arraystr.push(string[i]);
        console.log("string: " + string[i]);
       
    }
    console.log(arraystr);
    
    return arraystr;
 }

 
}