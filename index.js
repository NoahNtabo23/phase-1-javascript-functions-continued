function saturdayFun(activity){
    
    if(!activity){
        return "This Saturday, I want to roller-skate!"
    }else {
        return "This Saturday, I want to bathe my dog!"
    }
    
    
  
    
}
saturdayFun("bathe my dog")

function mondayWork(activity){
    if(!activity){
        return "This Monday, I will go to the office."
    }else{
        return "This Monday, I will work from home."
    }

}
mondayWork("work from home")

function wrapAdjective(par = "*"){
    return function (inner = "special"){
        `You are ${par}a hard worker${par}!`
    }
}
