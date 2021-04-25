Part-1a

    Var Declaration
    1) values added: 20
    2) final result: 20
   
    Let Declaration
    1) values added: 20
    2) error because result is declared in the {block scope} using let, it cannot be access outside of the block it is defined in.

    Const Declaration
    1) error because result is declared as a const so it cannot be reassign, at line 4 it is trying to reassign result.
    2)  error because result is declared as a const so it cannot be reassign, at line 4 it is trying to reassign result.


Part-1b

    1) It will print 3, the vaulue of i, the length of prices[]. Since i is declared as var it can be access outside of the block scope it is declared, when i = the length of prices[] it will exit out of the for loop. When i is printed after the loop it will print the length of prices[].

    2) it prints 150, because discountedPrice is declared using var it can be access outside the scope. The last element in prices is 300, discount is 0.5, discountedPrice = 300 * (1 - 0.5) = 150. At the end of the scope this will be the value for discountedPrice.

    3) It will print 10, final price is also declared using var, and it is equal to the rounded discountedPrice which is also 150. At the end of the for loop it has the value of 150 and stay 150 when the loop is finished.

    4) It will return an array of the final prices. discounted = [50, 100, 150];

    5) error because i is not defined. It was define in the block scope using let it can be only access in the scope.

    6) error, same as last question discountedPrice is not define in this scope. 

    7) 150, finalPrice is defined in the current block scope so it will keep the last value run in the for loop which is 150.

    8) It will return an array of the final prices. discounted = [50, 100, 150];

    9) The whole program doesn't run because of attempting to change const value, but theorectially it should print out 3.

    10) The program still doesn't run because of attempting to change a const value, but theoreactically it should print 3 the length of prices[].

    11) The program still doesn't run, since discounted is a const empty array it will stay as a counstant empty array.

    12) a) student.name
     b) student['Grad Year'] 
     c) student.greeting() 
     d) student['Favorite Teacher'].name
     e) student.courseLoad[0]

    13) a) '32'   ,'3' is a string , '3' + 2 integer map to string representation
        b)  1      cannot subtract string, it will convert the string to int then perform the subtraction
        c)  3  , null is like 0. 3 + 0 = 3
        d) '3null'  , concatenate 'null' to string '3' 
        e) true map to 1,  1 + 3 = 4
        f) 0, false map to 0, null maps to 0, 0 + 0 = 0.
        g) '3undefined' , concatenate 'undefined; to '3'
        h) Nan  , '3' can be convert to integer, but undefined is not a number, 3-nan = nan

    14) a) true , string '2' become number 2, 2>1 is true
        b)  false, dictionary comparson, first char '2' is greater than first char '1'.
        c) true, '2' become number 2, 2==2
        d) false, === is string equality without type conversion, different type will return false
        e) false , true maps to 1 1 != 2.
        f) true, Boolean() 0, empty, null, undefined, NaN become false, other values become true.

    15) == is the equality test, comparing different types == will converts the values to number.
        === a strict equality operator without type conversion, different type will return false.

    16) part1b-question16.js
   
    17)  The result will be the function modifyArray() will return an array [2,4,6] with each value in the first parameter multiply by 2. 
         1) modifyArray() has two parameter, the first one is an array of int, the second one is a function doSomething()
         2) modifyArray() creates an array and call doSomething() on every integer of the input array, which basically multiply the int by 2.
         3) and push every int return by doSomething in the new array and return a copy of the new array.

    18) part1b-question18.js


    19) 1
        4
        3
        2
        


   