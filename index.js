// Code your solution here
 function findMatching(names,string){
     let results = [];
     for(const element of names){
         if(element === string || element.toLowerCase() === string.toLowerCase())
         results.push(element)
     }
     return results

}

function fuzzyMatch(names,string){
    let nameSearch = []
        for(const element of names){
            if(element[0] === string[0]){
                nameSearch.push(element)

            }
        }
    return nameSearch;
}
function matchName(driver, string){
    let newName = []
    for(const element of driver){
        if(element.name === string){
            newName.push(element)
        }
    }
    return newName
}