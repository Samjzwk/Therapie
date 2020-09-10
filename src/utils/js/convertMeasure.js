   /**
      1oz = 29.5ml
      1cup = 257ml
      1lb = 453.5g
      1tsp = 1CaC
      1tblsp  = 1CaS
      1scoops = 1.5 CaC
      1 tablespoons = 1 CaS
      1 shot = 44ml
    */
   export const getMeasure = (toMeasure) => {
    if(!toMeasure || toMeasure === null) return '';
    
    let measure = toMeasure.toUpperCase(),
     convertedMeasure = measure,
     value = measure.split(" ", 2)[0];

    if(value.includes('/')){
      let arrayValue = value.split('/');
      value = arrayValue[0]/arrayValue[1];
    } 

    if(measure.includes("lb")) convertedMeasure = `${parseFloat(value * 453.5).toFixed(0)}g`;
    else if(measure.includes("OZ")) convertedMeasure = `${value * 29.5}ml`;
    else if(measure.includes("CUP")) convertedMeasure = `${parseFloat(value * 257).toFixed(0)}g`;
    else if(measure.includes("TSP")) convertedMeasure = `${value}CaC`;
    else if(measure.includes("TBLSP")) convertedMeasure = `${value*1.5}CaS`;
    else if(measure.includes("CL")) convertedMeasure = `${value*10}ml`;
    else if(measure.includes("SCOOPS")) convertedMeasure = `${value*1.5}CaC`;
    else if(measure.includes("TABLESPOONS")) convertedMeasure = `${value*1.5}CaS`;
    else if(measure.includes("SHOT")) convertedMeasure = `${value*44}ml`;
    return convertedMeasure;
  }
