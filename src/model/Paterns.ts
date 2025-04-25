import Patern from "./Patern";

const linearGradient=(deg:number,thickness:number) => `repeating-linear-gradient( ${deg}deg,rgba(0,0,0,0),rgba(0,0,0,0) ${thickness}px,rgba(0,0,0,0.15) ${thickness}px,rgba(0,0,0,0.15) ${thickness*2}px)`
const circleRadialGradient=(circlePos:number,thickness:number) => `repeating-radial-gradient( circle at ${circlePos}%,rgba(0,0,0,0),rgba(0,0,0,0) ${thickness}px,rgba(0,0,0,0.15) ${thickness}px,rgba(0,0,0,0.15) ${thickness*2}px)`
const cornerRadialGradient=(circleX:number, circleY:number,thickness:number) => `repeating-radial-gradient( farthest-corner at ${circleX}% ${circleY}%,rgba(0,0,0,0),rgba(0,0,0,0) ${thickness}px,rgba(0,0,0,0.15) ${thickness}px,rgba(0,0,0,0.15) ${thickness*2}px)`
const conicGradient = (centerX:number, centerY:number, thickness:number) => `repeating-conic-gradient( from 0deg at ${centerX}% ${centerY}%,rgba(0,0,0,0) 0deg ${thickness}deg,rgba(0,0,0,0.15) ${thickness}deg ${thickness*2}deg)`

// Later we can maybe make this more custom but for now I'd really rather not
export const Paterns = [
    {
        code:"",
        name:"None",
        backgroundImage: ""
    },
    {
        code:"lin45",
        name:"Linear 45°",
        backgroundImage: linearGradient(45,10)
    },
    {
        code:"lin0",
        name:"Linear Horizontal",
        backgroundImage: linearGradient(0,10)
    },
    {
        code:"lin135",
        name:"Reverse Linear 45°",
        backgroundImage: linearGradient(135,10)
    },
    {
        code:"lin90",
        name:"Linear Vertical",
        backgroundImage: linearGradient(90,10)
    },{
        code:"lin45T",
        name:"Thick Linear 45°",
        backgroundImage: linearGradient(45,20)
    },
    {
        code:"lin0T",
        name:"Thick Linear Horizontal",
        backgroundImage: linearGradient(0,20)
    },
    {
        code:"lin135T",
        name:"Thick Reverse Linear 45°",
        backgroundImage: linearGradient(135,20)
    },
    {
        code:"lin90T",
        name:"Linear Vertical",
        backgroundImage: linearGradient(90,20)
    },
    {
        code:"radLeft",
        name:"Drop Left",
        backgroundImage: circleRadialGradient(15,10)
    },
    {
        code:"radCenter",
        name:"Drop Center",
        backgroundImage: circleRadialGradient(50,10)
    },
    {
        code:"radRight",
        name:"Drop Right",
        backgroundImage: circleRadialGradient(85,10)
    },
    {
        code:"radTopLeft",
        name:"Drop Top Left",
        backgroundImage: cornerRadialGradient(0,0,40)
    },
    {
        code:"radTopRight",
        name:"Drop Top Right",
        backgroundImage: cornerRadialGradient(100,0,40)
    },
    {
        code:"radBottomLeft",
        name:"Drop Bottom Left",
        backgroundImage: cornerRadialGradient(0,100,40)
    },
    {
        code:"radBottomRight",
        name:"Drop Bottom Right",
        backgroundImage: cornerRadialGradient(100,100,40)
    },
    {
        code:"radBottomCenter",
        name:"Drop Bottom Center",
        backgroundImage: cornerRadialGradient(50,100,20)
    },
    {
        code:"radTopCenter",
        name:"Drop Top Center",
        backgroundImage: cornerRadialGradient(50,0,20)
    },    
    {
        code:"conLeft",
        name:"Cone Left",
        backgroundImage: conicGradient(15,15,10)
    },
    {
        code:"conCenter",
        name:"Cone Center",
        backgroundImage: conicGradient(50,50,10)
    },
    {
        code:"conRight",
        name:"Cone Right",
        backgroundImage: conicGradient(85,85,10)
    },
    {
        code:"conTopLeft",
        name:"Cone Top Left",
        backgroundImage: conicGradient(0,0,10)
    },
    {
        code:"conTopRight",
        name:"Cone Top Right",
        backgroundImage: conicGradient(100,0,10)
    },
    {
        code:"conBottomLeft",
        name:"Cone Bottom Left",
        backgroundImage: conicGradient(0,100,10)
    },
    {
        code:"conBottomRight",
        name:"Cone Bottom Right",
        backgroundImage: conicGradient(100,100,10)
    },
    {
        code:"conBottomCenter",
        name:"Cone Bottom Center",
        backgroundImage: conicGradient(50,100,20)
    },
    {
        code:"conTopCenter",
        name:"Cone Top Center",
        backgroundImage: conicGradient(50,0,20)
    }
] as Patern[]