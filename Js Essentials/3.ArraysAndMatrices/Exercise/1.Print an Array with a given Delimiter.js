function solve(inputArgs) {
    let delimeter = inputArgs.pop();

    console.log(inputArgs.join(delimeter, inputArgs));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);