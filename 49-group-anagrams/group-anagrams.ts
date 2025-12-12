function groupAnagrams(strs: string[]): string[][] {
let result = {}

for(let str of strs){
    let sortedStr = str.split('').toSorted().join('')
        
    if(!result[sortedStr]){
        result[sortedStr] = [str]
    }else{
        result[sortedStr].push(str)
    }
}

return Array.from(Object.values(result))
};