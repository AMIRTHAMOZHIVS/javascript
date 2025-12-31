let isLoggedin = true
let isAdmin = false
let age = 16
if(isLoggedin&&age>=18){
    console.log("Access : YES")
}else{
    console.log("Access : No")
}
if(isAdmin||age>=65){
    console.log("Access : YES")
}
else{
    console.log("Access : No")
}
if(!(age<18)){
    console.log("Access : No")
}