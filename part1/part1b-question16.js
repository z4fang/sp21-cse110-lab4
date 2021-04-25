let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (x in statistics)
{
    if(statistics[x]%2 == 1 || x.charAt(0) === 'r')
    {
        console.log(statistics[x]);
    }
    
}