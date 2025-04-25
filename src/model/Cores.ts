import CoreType from "./CoreType"

export const Cores = [
    {code:"SHP", name:"Spherical", hasHeight:false, widthDimensionName:"Diameter"},
    {code:"CUB", name:"Cubical", hasHeight:false, widthDimensionName:"Width"},
    {code:"CYL", name:"Cylindrical", hasHeight:true, widthDimensionName:"Diameter"},
    {code:"IRR", name:"Irregular", hasHeight:true, widthDimensionName:"Width"},
    {code:"PRY", name:"Pyramidal", hasHeight:true, widthDimensionName:"Width"},
    {code:"RMB", name:"Rhombus", hasHeight:true, widthDimensionName:"Width"},
    {code:"NON", name:"Coreless", hasHeight:false, widthDimensionName:""},
    {code:"OTH", name:"Other", hasHeight:true, widthDimensionName:"Width"},
] as CoreType[]