//--slider part-----------------------------------------------

//get slider value
const sR = document.querySelectorAll('.sliderItem1 h2')[1]
const sG = document.querySelectorAll('.sliderItem2 h2')[1]
const sB = document.querySelectorAll('.sliderItem3 h2')[1]


// each slider row
const sliderValue = document.querySelector('.sliderItems')

const sliderText = document.querySelector('.sliderText')

//box backgroundColor
const boxC = document.querySelector('.box')

//default background color
boxC.style.backgroundColor = `rgb(${sR.innerText},${sG.innerText},${sB.innerText})`

//slider listener
sliderValue.addEventListener('input', (e) => {
  let target = e.target
  if(target.matches('.i1')){    
    sR.innerText = Number(target.value)
    sliderText.innerText = sliderString()
    boxC.style.backgroundColor = `rgb(${sR.innerText},${sG.innerText},${sB.innerText})`
  }
  if(target.matches('.i2')){    
    sG.innerText = Number(target.value)
    sliderText.innerText = sliderString()
    boxC.style.backgroundColor = `rgb(${sR.innerText},${sG.innerText},${sB.innerText})`
  }
  if(target.matches('.i3')){    
    sB.innerText = Number(target.value)
    sliderText.innerText = sliderString()
    boxC.style.backgroundColor = `rgb(${sR.innerText},${sG.innerText},${sB.innerText})`
  }
 
})

function sliderString() {
    let sliderstring = '#'
    let sRT = Number(sR.innerText)
    let sGT = Number(sG.innerText)
    let sBT = Number(sB.innerText)
    
    sliderBox = [sRT, sGT, sBT]
    for (let i= 0; i < sliderBox.length; i++) {
    if (sliderBox[i] < 16) { sliderstring += '0' }
      sliderstring += sliderBox[i].toString(16).toUpperCase()
  }
    
  return  sliderstring
}

//----------------------------------------------------------------

// get placeholder value
const R =  Number(document.querySelectorAll('input')[0].placeholder)
const G =  Number(document.querySelectorAll('input')[1].placeholder)
const B =  Number(document.querySelectorAll('input')[2].placeholder)
// 取得RGB 3值放入 dataBox, 再用裡面的資料去做16進位換算
let dataBox =[R,G,B]
connectNums()

// 串連得到的數字
function connectNums(){
  let hexString =''
  for(let i= 0; i < dataBox.length; i++){
    if(dataBox[i] < 16) { hexString += '0'}
      hexString += dataBox[i].toString(16).toUpperCase()
  }
  //將串接好的16進位放到 HEX框框
  let hexV = document.querySelector('.hexValue')
  hexV.innerText = hexString
  // console.log(hexV)
}

// 3 inputs
const rgbInput = document.querySelector('.items')

// covert button
const btn = document.querySelector('.botton')

//colors
const rectR = document.querySelector('.rect2.rectR')
const rectG = document.querySelector('.rect2.rectG')
const rectB = document.querySelector('.rect2.rectB')
const sqareHex = document.querySelector('.square')

// Listening to the input value and changes the small quare color
rgbInput.addEventListener('input', (e) => {
   let getInput = Number(e.target.value)  
   if(isNaN(getInput)){ getInput = 0 }
   if(getInput > 255) { getInput = 255 }
   if(getInput < 0) { getInput = 0 }
   if (e.target.matches('#b1')) {
    dataBox[0] = getInput  
    rectR.style.backgroundColor = `rgb(${getInput},0,0)`
   } else if (e.target.matches('#b2')) {
      dataBox[1] = getInput  
      rectG.style.backgroundColor = `rgb(0,${getInput},0)`
   } else {
      dataBox[2] = getInput  
      rectB.style.backgroundColor = `rgb(0,0,${getInput})`
   }
})



// convert color and its hex value
btn.addEventListener('click',(e) => {
   connectNums()
   let hexV = document.querySelector('.hexValue')
   sqareHex.style.backgroundColor = `#${hexV.innerText}`
   // boxC.style.backgroundColor = `#${hexV.innerText}`
})



