function isAnagram(s: string, t: string): boolean {
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    if(sortedS == sortedT){
        return true
    }else{
        return false
    }
};