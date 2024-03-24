import { useState } from "react"

function App() {
  const [Color, setColor] = useState("pink")
  const [value, setvalue] = useState("Pick color to change background")


  function handleColorR (){
    setColor("red")
    setvalue("You Chosed Red Colour")
  }
  function handleColorY (){
    setColor("yellow")
    setvalue("You Chosed yellow Colour")
  }
  function handleColorO (){
    setColor("orange")
    setvalue("You Chosed orange Colour")
  }
  function handleColorGr (){
    setColor("green")
    setvalue("You Chosed green Colour")
  }
  function handleColorB (){
    
    setColor("black")
    setvalue(<span style={{ color: "white" }}>You Chose black Color</span>);
  }
  function handleColorG (){
    setColor("grey")
    setvalue("You Chosed Grey Colour")
  }
  return (
    <>
      <div style={{backgroundColor:Color,width:"100vw",height:"100vh"}}>
        
        <div style={{position:"fixed",bottom:"300px",left:"500px",borderRadius:"10px",color:"black",fontWeight:"bolder"}}>
        <div style={{marginRight:"20px"}}>{value}</div> 
          <div style={{display:"flex",color:"black",backgroundColor:"white",borderRadius:"20px",marginTop:"10px"}}>
            <button style={{backgroundColor:"red",padding:"5px",margin:"5px",width:"80%"}} onClick={handleColorR}>Red</button>
            <button style={{backgroundColor:"yellow",padding:"5px",margin:"5px",width:"80%"}} onClick={handleColorY}>yellow</button>
            <button style={{backgroundColor:"orange",padding:"5px",margin:"5px",width:"80%"}} onClick={handleColorO}>orange</button>
            <button style={{backgroundColor:"green",padding:"5px",margin:"5px",width:"80%"}} onClick={handleColorGr}>green</button>
            <button style={{backgroundColor:"black",padding:"5px",margin:"5px",width:"80%",color:"white"}} onClick={handleColorB}>black</button>
            <button style={{backgroundColor:"grey",padding:"5px",margin:"5px",width:"80%",color:"white"}} onClick={handleColorG}>Grey</button>
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
