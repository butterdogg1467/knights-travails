document.addEventListener('DOMContentLoaded', function(){

function knightMoves([x, y], [x2, y2]) {

    if (checkValidity(x, y) === false || checkValidity(x2, y2) === false) {
        return
    }
    
    let queue = []
    let visited = []
    let knightPos = [x, y]
    let targetPos = [x2, y2]
    queue.push([[x,y], [[x,y]]])
    let moves = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]]

    while (queue.length > 0) {
        let [currentPosition, currentPath] = queue.shift()
        if (currentPosition[0] === x2 && currentPosition[1] === y2) {
            return currentPath
        } else {
            for (let i = 0; i < moves.length; i++) {
                let newX = currentPosition[0] + moves[i][0]
                let newY = currentPosition[1] + moves[i][1]
                if (checkValidity(newX, newY)){
                    let newPath = [...currentPath, [newX, newY]]
                    if (!visited.some(pos => pos[0] === newX && pos[1] === newY)) {
                        visited.push([newX, newY])
                        queue.push([[newX, newY], newPath])
                    }
                }
            }
        }
    }

    return "No path found"


}

function checkValidity(newX, newY) {
    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        return true
    } else {
        return false
    }
}

console.log(knightMoves([0,0], [3,3]))





























































})