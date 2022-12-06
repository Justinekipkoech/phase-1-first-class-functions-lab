const  returnFirstTwoDrivers = function block(){
    return (['Justine', 'Limo'])}
    const  returnLastTwoDrivers = function block(){
        return (['Kipkoech', 'Hil']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    function createFareMultiplier(number){
        return function(fare){
          return fare*number;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
      };