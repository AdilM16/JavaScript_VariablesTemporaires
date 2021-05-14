//Variables temporaires
let a = 1; //2
let b = 2; //3
let c = 3; //1

let tmp = a;
a = b;
b = c;
c = tmp;
console.log(a,b,c);
//Afficher le changement des variables

//Exo 1
//Afficher 4, 3, 2, 1
let d = 1; //4
let e = 2; //3
let f = 3; //2
let g = 4; //1


d = g;
e = f;
let tmp1 = 2
f = tmp1;
tmp1 = 1
g = tmp1;
console.log(d,e,f,g);

//Afficher le changement des variables

//Exo 2
let h = 1; //2
let i = 2; //3
let j = 3; //4
let k = 4; //1

h = i; 
i = j; 
j = k;
let tmp2 = 1
k = tmp2;
console.log(h,i,j,k);

//Afficher le changement des variables

//Exo 3
//Afficher 4, 3, 2, 1 avec une variable temporaire
let tableau = [1, 2, 3, 4];
console.log(tableau.reverse());


//Exo 4

let l = 1 //4
let m = 2 //5
let n = 3 //1
let o = 4 //2
let p = 5 //6
let q = 6 //3

l = o
m = p
let tmp3 = 1
n = tmp3
tmp3 = 2
o = tmp3
p = q
tmp3 = 3
q = tmp3
console.log(l,m,n,o,p,q);


//Afficher le changement des variables