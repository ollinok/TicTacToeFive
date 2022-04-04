function winCondition(boardHeight, boardWidth) 
{
    const he = boardHeight;
    const wi = boardWidth;
    const winLines = [];
    // horizontal
    for (let i=0;i<he;i++) {
        for (let u=0;u<(wi-4);u++) {
            winLines.push(
                [u+(wi*i),
                 u+(wi*i)+1,
                 u+(wi*i)+2,
                 u+(wi*i)+3,
                 u+(wi*i)+4
                ]);
        }
    }
    // vertical
    for (let i=0;i<wi;i++) {
        for (let u=0;u<(he-4);u++) {
            winLines.push(
                [i+(wi*u),
                 i+(wi*u)+wi,
                 i+(wi*u)+wi*2,
                 i+(wi*u)+wi*3,
                 i+(wi*u)+wi*4
                ]);
        }
    }
    // diagonal
    for (let i=0;i<(he-4);i++) {
        for (let u=0;u<(wi-4);u++) {
            winLines.push(
                [u+(wi*i),
                 u+(wi*i)+1+wi,
                 u+(wi*i)+2+wi*2,
                 u+(wi*i)+3+wi*3,
                 u+(wi*i)+4+wi*4
                ]);
        }
        for (let u=0;u<(wi-4);u++) {
            winLines.push(
                [u+4+(wi*i),
                 u+3+(wi*i)+wi,
                 u+2+(wi*i)+wi*2,
                 u+1+(wi*i)+wi*3,
                 u+(wi*i)+wi*4,
                ]);
        }
    }
    return winLines;
}

export default winCondition;