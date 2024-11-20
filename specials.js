const currentDate = new Date();
console.log(currentDate);
let dayOfTheWeek = currentDate.getDay();
console.log(dayOfTheWeek); //day of week is ouput as a number indexed at 0//
if(dayOfTheWeek==0){
    specialName.innerHTML = "$9 Deluxe Burger & Fries"
    specialImage.src = "images/sunday.jpg";
    imageDescription.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included."
    }
    else if(dayOfTheWeek==1){
    specialName.innerHTML = "$12 Chicken Penne Alfredo"
    specialImage.src = "images/monday.jpg";
    imageDescription.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included."
    }
    else if(dayOfTheWeek==2){
    specialName.innerHTML = "$10 Any Small Pizza"
    specialImage.src = "images/tuesday.jpg";
    imageDescription.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust."
    }
    else if(dayOfTheWeek==3){
    specialName.innerHTML = "35¢ Chicken Wings"
    specialImage.src = "images/wednesday.jpg";
    imageDescription.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that."
    }
    else if(dayOfTheWeek==4){
    specialName.innerHTML = "$9 Fish and Chips"
    specialImage.src = "images/thursday.jpg";
    imageDescription.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!"
    }
    else if(dayOfTheWeek==5){
    specialName.innerHTML = "Half Price Cocktails All Day"
    specialImage.src = "images/friday.jpg";
    imageDescription.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price."
    }
    else if(dayOfTheWeek==6){
    specialName.innerHTML = "$10 Jumbo Greek Salad"
    specialImage.src = "images/saturday.jpg";
    imageDescription.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price."
    }
    