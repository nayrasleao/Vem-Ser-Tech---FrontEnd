let result;
let result2;

window.addEventListener( 'resize' , function(){
    result = window.innerWidth; //considera somente a visualização do site
    result2 = window.outerWidth;//considera toda a area do browser

    if(result < 900){
        console.log('mobile: ');
    }else{
        console.log('desktop: ');
    }

    // console.log('result in: ', result)
    // console.log('result out: ', result2)
} );



