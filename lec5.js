let hour=12;

if(hour >= 6 && hour <12)
    {
        console.log("Good morning");
    }
else if(hour >= 12 && hour < 18)
    {
        console.log("Good Afternoon");
    }
else if (hour >=18 && hour < 20){
    console.log ("Good Evening");
}
else if (hour >=20 && hour < 24 || hour >=1 && hour <6)
    {
        console.log("Good Night");
    }
else{
    console.log("Invalid")
}