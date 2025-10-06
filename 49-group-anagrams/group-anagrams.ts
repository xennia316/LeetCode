function groupAnagrams(strs: string[]): string[][] {
    
    let resultMap = {}

    for(const str of strs){

        let sortedStr = str.split('').sort().join('')

        if(Object.hasOwn(resultMap, sortedStr)){
            resultMap[sortedStr].push(str)
        }else{
            resultMap[sortedStr] = [str]
        }
    }

    return Object.values(resultMap)
};