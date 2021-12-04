import React from 'react'

function Card(props){
    return (
        <div class = "boxes">
        <div class = "box1">
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
        </div>
        <h5 id = "one" class = "box1">{props.info}</h5>
    
        <div class = "box2">
            <h1>{props.title2}</h1>
            <h3>{props.subTitle2}</h3>
        </div>
        <h5 id = "two" class = "box2">{props.info2}</h5>

        <div class = "box3">
            <h1>{props.title3}</h1>
            <h3>{props.subTitle3}</h3>
        </div>
        <h5 id = "three" class = "box3">{props.info3}</h5>
 
        <div class = "box4">
            <h1>{props.title4}</h1>
            <h3>{props.subTitle4}</h3> 
        </div>
        <h5 id = "four" class = "box4">{props.info4}</h5>
        </div>
    )
} 




export default function Cards(){
    return(
        <div class = "boxes">
            <Card
                title = "Title 1"
               info = "Hello World 1!"
               subTitle ="Sub Title 1"
        
        
                title2 = "Title 2"
                info2 = "Hello World 2!"
                subTitle2 ="Sub Title 2"
                
            
                title3 = "Title 3"
                info3= "Hello World 3!"
                subTitle3 ="Sub Title 3"
                
               
    
                title4 = "Title 4"
                info4 = "Hello World 4!"
                subTitle4 ="Sub Title 4"
                width = "250px"

            />
        </div>
    )
}