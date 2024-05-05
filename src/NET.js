import { useEffect, useState } from "react";
import { Vw } from "./VW";

export function Nets({scanner,bibleName,AMPscan,CahapterNumbering,scannerLength,AMPscanLength,VWscan,VWscanLength,asvsScan,asvsScanLength,kjvScan,kjvScanLength}){

const [Net,setNet] = useState([])

useEffect(()=>{

  let net = require("../src/JSON/net.json");


setNet([...Net,net ])


},[])

let scan = []


 Net.map(content => {
  
    let books = content.verses;
    books.map(item => {
      if (
        item.chapter == CahapterNumbering &&
        item.book_name == bibleName 
      ) {
        let texts = item.text;
    scan.push(texts);
        // console.log(scan);
      }
    });
    let Ulist = document.createElement("ul");
    Ulist.style.padding = "0px";
    Ulist.style.width = "fit-content"
    Ulist.style.height = "100vh"
    Ulist.style.overflow = "scroll"
    Ulist.id= "UlistId"
    
    for (
      let i = 0;
      i < Math.max(scan.length, scannerLength, AMPscanLength, VWscanLength, asvsScanLength, kjvScanLength);
      i++
    ) {
      if (scan[i]) {
        let list = document.createElement("li");
        list.style.background = "pink";
        list.id = `NET${i + 1}`;
        list.style.overflow = "scroll"
    
        let man = document.createElement("h1");
        man.innerText = "NET";
        man.style.color = "red";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"



    
        list.innerHTML = `${i + 1} ${man.innerText}  : ${
         scan[i]
        }`;
        Ulist.appendChild(list);
      }
    
      if (scanner[i]) {
        let list = document.createElement("li");
        list.id = `NAB${i + 1}`;
        list.style.background = "yellow";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"
        list.style.paddingTop = "1%"
        list.style.paddingBottom = "1%"



    
        list.innerHTML = scanner[i];
        Ulist.appendChild(list);
      }
    
      if(AMPscan){
        let list = document.createElement("li");
        list.id = `MSG${i + 1}`;
        list.style.background = "coral";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"
        list.style.paddingTop = "1%"
        list.style.paddingBottom = "1%"


    
        list.innerHTML = `MSG : ${AMPscan[i]}`
        Ulist.appendChild(list);
    
    
    
      }

      if(VWscan){
        let list = document.createElement("li");
        list.id = `VW${i + 1}`;
        list.style.background = "bisque";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"
        list.style.paddingTop = "1%"
        list.style.paddingBottom = "1%"
        list.style.textDecoration = "none"


       list.addEventListener("click", function(e){


list.addEventListener("click",function(){
list.style.textDecoration = "none" ? "underline" : "none"

  //     list.style.textDecoration = "underline"
    })



       })

    
        list.innerHTML = `AMP : ${VWscan[i]}`
        Ulist.appendChild(list);
    
    
    
      }

      if (asvsScan) {

        let list = document.createElement("li");
        list.id = `ASVS${i + 1}`;
        list.style.background = "gold";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"
        list.style.paddingTop = "1%"
        list.style.paddingBottom = "1%"


    
        list.innerHTML = `ASVS : ${asvsScan[i]}`
        Ulist.appendChild(list);
    
  
        
      }


      if (kjvScan) {

        let list = document.createElement("li");
        list.id = `KJV${i + 1}${"man".toUpperCase()}`;
        list.style.background = "aquamarine";
        list.style.marginBottom = "35px";
        list.style.boxShadow = "1px 3px 8px 0px"
        list.style.marginLeft = "1.3%"
        list.style.marginRight = "1.3%"
        list.style.paddingLeft = "2.2%"
        list.style.paddingRight = "2%"
        list.style.paddingTop = "1%"
        list.style.paddingBottom = "1%"

    
        list.innerHTML = `KJV : ${kjvScan[i]}`
        Ulist.appendChild(list);
    
  
        
      }

     


    }

    document.querySelector("#Appender2").append(Ulist);
    console.log("brown is peacesss");

    })


return (

  <>

  </>
)

}

