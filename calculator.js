function f1() {
    
    let height;
    height = document.getElementById("h1").value;
    console.log("Height : " + height);
    let weight;
    weight = document.getElementById("w1").value;
    console.log("Weight : " + weight);

    let meter;
    meter = height / 100;
    let bmi;
    bmi=0;
    bmi = (weight) / (meter * meter);
    setInterval(() => {
        
    }, );
    document.getElementById("bmi").outerHTML += bmi;
    // clearInterval(bmi);
    console.log("YOUR BODY MASS INDEX IS : " + bmi);

    document.getElementById("b2").style.cssText="display :block";
   
    
        if(bmi>=18 && bmi<=25)
        {
            console.log("YOU ARE TOTALLY FIT");
            alert("CONGRATULATIONS !!! , You Are Totally Fit");
        }
    
        else if(bmi>25 && bmi<=30)
        {
            console.log("Non-Fit");
            alert("You Are A Overweight person");
        }
        else if(bmi<18)
        {
            console.log("Underweight");
            alert("You Are A Underweight person");
        }
        
        else if(bmi>30)
        {
            console.log("Highly Overweight");
            alert("You Are A Highly Overweight person");
        }
        else{
            console.log('error');
        }   
}

function f2(){
    let height;
        height = document.getElementById("h1").value;
        console.log("Height : " + height);
        let weight;
        weight = document.getElementById("w1").value;
        console.log("Weight : " + weight);
    
        let meter;
        meter = height / 100;
        let bmi;
        bmi=0;
        bmi += (weight) / (meter * meter);
        // document.getElementById("bmi").innerHTML += bmi;
        // clearInterval(bmi);
        console.log("YOUR BODY MASS INDEX IS : " + bmi);
        // document.getElementById("bmi").innerHTML = 0;
        document.getElementById("bmi").innerHTML = bmi;
        document.getElementById("b2").style.cssText="display :block";
       
        
            if(bmi>=18 && bmi<=25)
            {
                console.log("YOU ARE TOTALLY FIT");
                alert("CONGRATULATIONS !!! , You Are Totally Fit");
            }
        
            else if(bmi>25 && bmi<=30)
            {
                console.log("Non-Fit");
                alert("You Are A Overweight person");
            }
            else if(bmi<18)
            {
                console.log("Underweight");
                alert("You Are A Underweight person");
            }
            
            else if(bmi>30)
            {
                console.log("Highly Overweight");
                alert("You Are A Highly Overweight person");
            }
            else{
                console.log('error');
            } 
}

    // function imgclick(){
        
    // }