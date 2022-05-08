let productArray;

document.querySelector("#fooditems").addEventListener("submit",myform);

function myform(event){
    event.preventDefault()
    var checkbox=document.getElementsByName("food")
    for(let i=0;i<checkbox.length;i++)
    {
        if(checkbox[i].checked==true)
        {
            var food=(checkbox[i].value)

            orderfood(food);

        }
    }

}


async function  orderfood(food){
    let status="open";

    let foodPromise=new Promise(function(resolve,reject){
        let time=Math.random()*1000;

        if(status=="close"){
            reject("shop closed")
        }
        else{
            setTimeout(function(){
            resolve(food) 
        },time)
        }
    });
    try{
        let res=await foodPromise;

        switch (res){
            case"Bacon Egg & Cheese Biscuit":

            createImage("https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",res,1)

            case"Egg McMuffin®":

            createImage("https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:product-header-desktop?wid=829&hei=455&dpr=off",res,2)

            case"Sausage Biscuit with Egg":

            createImage("https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",res,3)

            case "Big Breakfast® with Hotcakes":

            createImage("https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Breakfast-with-Hotcakes-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",res,4)

            case "Hotcakes":

            createImage("https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hotcakes:product-header-desktop?wid=829&hei=455&dpr=off",res,5)
            
        }
    }

    catch(error){
        console.log(error)

        switch(error){

            case"shop closed":
            let img=document.createElement("img");
            img.src="https://i2-prod.dailypost.co.uk/incoming/article17993995.ece/ALTERNATES/s615b/0_A-sign-outside-the-temporarily-closed-McDonalds-restaurant-in-Holyhead-during-the-coronavirus-crisi.jpg"
            img.style.height="100%"
            img.style.width="100%"
            document.querySelector("#product").append(img)

        }

    }
}

function createImage(link,res,orderN){
    var h3=document.createElement("h3");
    h3.innerText=res;

    var p=document.querySelector("p");
    p.innerText=`order number $(orderN)`;

    let img=document.createElement("img");
    img.src=link;

    document.querySelector("#product").append(p,h3,img)
    myform(event)
}



