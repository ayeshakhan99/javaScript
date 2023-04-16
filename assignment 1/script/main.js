// javascript task 1
// var ZakatPercentage = 0.025
// var UserIput = +prompt( 'enter yout total zakat amount:')
// var Result = ZakatPercentage * UserIput
// alert("your zakat value is" +" "+Result)
 
// javascript task 2


// var UserInputA = +prompt( 'enter the total number of family members: ')
// var UserInputB = prompt(  'choose your fitrah method : WeatMethod, BarleyMethod , DatesMethod , RaisinMethod' )
// var WeatMethod = 250
// var BarleyMethod = 450
// var DatesMethod = 2100
// var RaisinMethod = 28000
// if ( UserInputB== 'WeatMethod') {
//     var TotalFitrah = UserInputA * WeatMethod
//     alert( TotalFitrah )
// }
// if ( UserInputB== 'BarleyMethod') {
//     var TotalFitrah = UserInputA * BarleyMethod
//     alert( TotalFitrah )
// }
// if ( UserInputB== 'DatesMethod') {
//     var TotalFitrah = UserInputA * DatesMethod
//     alert( TotalFitrah )
// }
// if ( UserInputB== 'RaisinMethod') {
//     var TotalFitrah = UserInputA * RaisinMethod
//     alert( TotalFitrah )
// } else (
//     alert("be care full with upper case and lower case while choosing any method")
// )

// javascript task 3
// var SecretNumber = 8
// var UserInput1 = +prompt ( 'guess the secret number between 1 and 10' )
// if ( UserInput1 == SecretNumber ) {
//     alert( 'you guess the right secret num' ) 
// }
    
//    else if ( UserInput1 > SecretNumber ) {
//         alert( 'you are guessing too high num' )
//     }
//     else if ( UserInput1 < SecretNumber ){
//     alert( 'you are guessing too low num' )
//    }
//    javascript task 4
// var UserName = prompt( 'enter your name')
// var UserName2 = UserName.charAt(0).toUpperCase() + UserName.slice(1);
// alert ( UserName2 )
    
// //    javascript task 5
// var ContactNames = [];
// var ContactNumbers = [];
// var UserInfo1 = prompt( 'enter the contactname' )
// var UserInfo2 = prompt( 'enter the contactname' )
// var UserInfo3 = prompt( 'enter the contactname' )
// var UserInfo4 = +prompt( 'enter the contactnum' )
// var UserInfo5 = +prompt( 'enter the contactnum' )
// var UserInfo6 = +prompt( 'enter the contactnum' )
// ContactNames.push ( UserInfo1 , UserInfo2 , UserInfo3);
// ContactNumbers.push ( UserInfo4 , UserInfo5 , UserInfo6);
// alert(ContactNames + " : " + ContactNumbers)

// javascript task 6
// var Products =[ "bags" , "shoes" , "dress" , "jwellery" , "perfumes" ]
// alert ( Products)
// var Products1 = +prompt(  'enter the position of the product you want')
// var RemovedProduct = Products.splice(+Products1,1)
// alert( 'removedproduct:'  + RemovedProduct)
// alert( 'remaining items \n'  +Products)
// alert( 'total no of remaining items:'  +Products.length)



// javascript task 7


var Nationality = prompt( ' enter yur nationality')
var Gender = prompt( ' enter your gender' )
var Age = +prompt( 'enter your age')

if( Nationality ==='pakistani' || Nationality ==='indian' ) {
    if( Gender=== 'male' && Age >= 18){
    
        alert( 'you are eligible to vote')
}
else if (Gender=== 'female' && Age >= 18 ){
    var MaritalStatus= prompt( 'are you married?') 
    if ( MaritalStatus=== 'married'){
        alert( 'you are eligible to vote')
    }
    else {
        alert( 'you are not eligible to vote')
}
    
}
else{
    
}

}


else (
    alert( 'you are not eligible to vote')
)

// javascript task 8
// var WorldCupSquad = [ "shaheeh" , "hasan" , "faraz" , "ibrahim" , "shoaib" , "jahanzaib" , "hamza" , "ajmal" , "ahmed" , "hamdan" , "sarim" , "huzaifa" , "usman" , "abdullah" , "abdurrehman"]
// alert( "display Worldcup squad:" + " " +WorldCupSquad)
// var SelectedPlayers = WorldCupSquad.slice(4,15 )

// alert( ' display final team members:' +" " + SelectedPlayers)

