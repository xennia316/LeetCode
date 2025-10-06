function minTimeToVisitAllPoints(points: number[][]): number {
    let result = 0;

    for(let i = 0; i < points.length - 1; i++){
        let j = i + 1;

        let x1 = points[i][0]
        let y1 = points[i][1]
        let x2 = points[j][0]
        let y2 = points[j][1]

        let xDiff = Math.abs(x2 - x1)
        let yDiff = Math.abs(y2 - y1)

        if(xDiff > yDiff){
            result += xDiff
        }else{
            result += yDiff
        }
    }

    return result
};