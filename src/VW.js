import { useState, useEffect } from "react"
import { Nets } from "./NET";







export function Vw({bibleNamer,chapter,AMPscan,AMPscanLength,scanner,scannerLength,bibleName,CahapterNumbering}){

    const [VWversion,setVWversion] = useState([])

    useEffect(() => {
        let data = require("../src/JSON/VW.json");
        setVWversion([...VWversion, data]);
      }, [])


    let VWscan = []


    const [VWscanLength,setVWScanLength] = useState()
  
    VWversion.map(item=>{
      let XMLBIBLE = item.XMLBIBLE
      
      XMLBIBLE.map(item=>{
          let BIBLEBOOK = item.BIBLEBOOK
      
          BIBLEBOOK.map(item=>{
              let CHAPTER = item.CHAPTER
      
      
      CHAPTER.map(item=>{
        
        // console.log(item.BOOKNAME)
          if(item.BOOKNAME == bibleNamer && CHAPTER[chapter]){

            console.log(CHAPTER[chapter]);
      
            let shake = CHAPTER[chapter].VERS
            console.log(shake);

            shake.map(item=>{
              VWscan.push(item)
              console.log(item);

  
  
            })
            
  
    
        }
  
        })
    
    
       })
     })
    return(
  
      <>
    
      </>
    )
    })


    return(
        <>
        {console.log(VWscan.length)}
        {console.log(VWscan)}

        <Nets AMPscan= {AMPscan} AMPscanLength={AMPscanLength} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering} VWscanLength={VWscan.length} VWscan={VWscan}/>

        
        </>
    )


}