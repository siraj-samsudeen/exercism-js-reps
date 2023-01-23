export function translate2d(dx,dy){
  return (x,y) => [x+dx , y+dy]
}

export function scale2d(dx,dy){
return (x,y) => [x*dx,y*dy]
}

export function composeTransform(f, g){
return (x,y) => (g(...f(x,y)))
}

export function memoizeTransform(f){
 let x1, y1, z;

 return function memoized(x,y){
  if( x1 === x && y1 === y){
    return z
  }

  x1 = x;
  y1 = y;

  return z = f(x,y);
 }
}