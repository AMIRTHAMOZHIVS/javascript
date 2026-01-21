function hi(n){
    if(n == 0){
        return;
    }
    console.log("Hi");
    hi(n - 1);
}
hi(5);
