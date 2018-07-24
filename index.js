var katzDeli = [];
function takeANumber(line, name) {
  line.push(name)
  
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
  
}

function nowServing(line){
  
  
if (line.length < 0) {
    return (`Currently serving ${line.shift()}.`)
    
}
  else { return "There is nobody waiting to be served!" 
  }
}

function currentLine(line) {
  var katz = []

  var sent = "The line is currently:";
  var len = line.length;
    if (line.length > 0) { 
  	  for (var i = 0; i < len; i++) {
          katz.push((` ${i+1}. ${line[i]}`))
      }
      return sent + katz
      
    } 
    else { 
      return "The line is currently empty.";
    }
}

