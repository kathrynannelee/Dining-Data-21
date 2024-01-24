let diningTable;
let diningRecord;

let palladium = 0;
let below18 = 0;
let kmp = 0;
let uhall = 0;
let lipton = 0;
let jaystreet = 0;
let jasperkane = 0;
let downstein = 0;
let sidestein = 0;
let upstein = 0;
let thirdnorth = 0;
let dunkin = 0;
let peets = 0;

let diningHalls;

let diningHallNames = ["Palladium", "18 Below", "Kimmel Market Place", "U-Hall Breakfast & Co", "Lipton", "370 Jay Street Coffee", "Jasper Kane", "Downstein", "Sidestein", "Upstein", "Third North Dining", "Dunkin Donuts", "Peet's Coffee"];

function preload() {
  diningTable = loadTable("NY - 225 Flex_statement_2020-11-01_to_2021-11-30.csv", "csv","header");
}

function setup() {
  createCanvas(800, 400);
  print(diningTable.getRowCount() + " total rows in table");
  print(diningTable.getColumnCount() + " total columns in table");

  diningRecord = diningTable.getColumn("Description");
  for(let i = 0; i < diningRecord.length; i++){
    if(diningRecord[i] == "Palladium"){palladium++;}
    if(diningRecord[i] == "18 Below"){below18++;}
    if(diningRecord[i] == "KMP"){kmp++;}
    if(diningRecord[i] == "Breakfst & Co."){uhall++;}
    if(diningRecord[i] == "Lipton"){lipton++;}
    if(diningRecord[i] == "370 Jay St Coffee"){jaystreet++;}
    if(diningRecord[i] == "Jasper Kane"){jasperkane++;}
    if(diningRecord[i] == "Downstein"){downstein++;}
    if(diningRecord[i] == "Sidestein"){sidestein++;}
    if(diningRecord[i] == "Upstein"){upstein++;}
    if(diningRecord[i] == "Third North Dining"){thirdnorth++;}
    if(diningRecord[i] == "Dunkin Donuts"){dunkin++;}
    if(diningRecord[i] == "Peet's"){peets++;}
  }
}

function draw() {
  background(200, 156, 255);
  
  diningHalls = [palladium, below18, kmp, uhall, lipton, jaystreet, jasperkane, downstein, sidestein, upstein, thirdnorth, dunkin, peets];
  for(let i = 0; i < diningHalls.length; i++){
    fill(87, 6, 140);
    text(diningHallNames[i] + ": " + diningHalls[i], 20, 25+30*i);
    fill(95, 57, 143);
    rect(185, 15+30*i, diningHalls[i]*5, 20);
  }
}
