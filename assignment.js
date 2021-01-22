



// ----------> kilometerToMeter <-------------
function kilometerToMeter(km){
    if(km <=0){
        return "Distance can not be negative number."
    }else{
        var m = km * 1000;
        return m;
    }
}
var m= kilometerToMeter(197);
console.log(m);




// ---------> budgetCalculator <-----------
function budgetCalculator(num_of_watch, num_of_phone, num_of_lapi){
    if(num_of_watch <= 0 || num_of_phone <= 0 || num_of_phone <=0){
        return 'The number you have entered is not valid.'
    }else{
        var price_of_watch = num_of_watch * 50;
        var price_of_phone = num_of_phone * 100;
        var price_of_lapi = num_of_lapi * 500;
        var budget = price_of_watch +price_of_phone + price_of_lapi;
        return budget;
    }
 
}
var final_budget = budgetCalculator(4,1,8);
console.log(final_budget);



// -----------> hotelCost <------------
function hotelCost(day){
    var total_cost ;
    if(day <= 10 && day >= 1){
        total_cost = day * 100 ;
    }else if(day > 10 && day <= 20){
        total_cost = day * 80 ;
    }else if(day > 20){
        total_cost = day * 50 ;
    }else{
        return 'The number you have entered is not a valid number.' ;
    }
    return total_cost ;
}
var final_cost = hotelCost(45);
console.log(final_cost);


// -----------> megaFriend <------------
function megaFriend(friends){
    if(friends.length == 0){
        return 'Please! do not enter an empty array.'
    }else{
        var listOffFrineds = friends[0];
        for(var i = 0; i < friends.length; i++){
            if(friends[i].length > listOffFrineds.length){
                listOffFrineds = friends[i];
            }
        }
        return listOffFrineds ;
    }
}
var large_friend_list = megaFriend(['Alam akbar','Balam tuku','Talam neku', 'Jalam uddin']);
console.log(large_friend_list);





