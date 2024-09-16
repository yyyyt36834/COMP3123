//Exercise1

const capFirstChar = function(str){
    let sentence = "";
    let flag = true;
    for (let char of str){

        // change the 1st character to capital
        if (flag == true){
            char = char.toUpperCase();
            flag = false;
        }

        // change flag to false
        // when whitespace comes
        if (char == " ")
            flag = true;

        // add characters together one by one
        sentence += char;
    }

    return sentence;
}

console.log("*Exercise 1*");
console.log(capFirstChar("the quick brown fox"));
console.log("")


// Exercise2
const max = function(num1,num2,num3){
    let maxNum = 0;
    let arr = [num1,num2,num3]
    for (let num of arr){
        if(num > maxNum)
            maxNum = num;
    }
    return maxNum
}

console.log("*Exercise 2*");
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));
console.log("")

// Exercise3
const right = function(str){
    if(str.length <= 3){
        return str;
    }else{
        let firstLetters = "";
        let lastLetters = "";
        let index = 0;

        // seperate letters into first chunk and last three
        for(let char of str){
            if(index >= str.length -3){
                lastLetters += char;
            }else{
                firstLetters += char;
            }
            index++;
        }
        return lastLetters+firstLetters;
    }
}
console.log("*Exercise 3*");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
console.log("")

// Exercise4
const angle_Type = function(ang){
    if(ang < 90)
        return "Acute angle";
    if(ang == 90)
        return "Right angle";
    if(ang < 180)
        return "Obtuse angle";
    if(ang == 180)
        return "Straight angle";
}

console.log("*Exercise 4*");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
