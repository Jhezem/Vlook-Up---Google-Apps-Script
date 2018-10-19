function look(hoja,Dbusq,fil,col,fil2,col2){

var sheet = SpreadsheetApp.getActive().getSheetByName(hoja);
var compar;
var result;



  while(sheet.getRange(fil, col).getValue() != ""){
     compar = sheet.getRange(fil, col).getValue();
     result = sheet.getRange(fil2, col2).getValue();
  
    if(Dbusq != compar){
  
      }  
      else if(Dbusq == compar){
      return result;
        break;  
    }
  fil++
      fil2++
      
}
  return "no resultados";
}
