function groupAnagrams(strs: string[]): string[][] {

    let resultMap = new Map<string, string[]>()

    for(const str of strs){
        let sortedStr = str.split('').sort().join('')

        if(resultMap.has(sortedStr)){
            resultMap.get(sortedStr).push(str)
        }else{
            resultMap.set(sortedStr, [str])
        }
    }

    return Array.from(resultMap.values())
};