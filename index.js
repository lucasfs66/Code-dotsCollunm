const dots = (colunm) => {
    let rows = colunm
    let stats = 0
    let string = '*'
    let space = ' '
    let result = ''
    
    for (let i = 1; i <= colunm; i++) {
            for (let g = i; g <= colunm; g++) {
                space += ' '
            }
            result = space + string + space
            string += '**'
            console.log(result)
            space = ' '


        
    }
}

dots(7)