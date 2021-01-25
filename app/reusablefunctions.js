let heading = "Welcome"

const calculations = (a, b, type) => {
    if(type === "html"){
        return alert(a + b)
    }else{
        return a + b
    }
}

const multiplication = (a, b) => {
    return alert(a * b)
}

const division = (a, b) => {
    return alert(a / b)
}

class Rectangle {
    calc(height, width) {
        return alert(height * width)
    }
} 



module.exports =  {heading, calculations, multiplication, division, Rectangle}