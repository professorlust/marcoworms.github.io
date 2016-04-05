'use strict'

(function(){
    
    var reactiveBoard = window.makeReactiveBoard('board')
    
    reactiveBoard.loadMap({
        name: "bg",
        map: {
            content: [
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,]
            ],
            roseta: {
                0: 'disabled',
                1: 'enabled'
            }
        }
    })
    
    reactiveBoard.loadMap({
        name = "pieces",
        map = {
            content: [
                [1,1,1,1,1,1,1,1,1,1,],
                [1,1,1,1,1,1,1,1,1,1,],
                [0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,],
                [2,2,2,2,2,2,2,2,2,2,],
                [2,2,2,2,2,2,2,2,2,2,]
            ],
            roseta: {
                0: 'nothing',
                1: 'player1',
                2: 'player2'
            }
        }
    })
    
    
}())




