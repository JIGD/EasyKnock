# EasyKnock Test Assignment

## Running the tests
Open console
Go to project dir
Enter 'npm install'
Enter '$(npm bin)/cypress open'
Select any test you want to run

## Edge Cases: 
Home Value too low:
If we set the home value to anything lower than 100000 then we get the may not qualify screen regardless of mortgage balance or other liens

Home Value too high:
If we set the home value to anything higher than 10000000 then we get the may not qualify screen regardless of mortgage balance or other liens

Stimated cash proceeds at 0 (Why?) 
Set Home Value = 100000, Mortgage Balance = $ 35,045 and Other Liens = $ 31,455, shouldn't we have a minimum range? E.G. If Estimated Cash Proceeds < 10000 then show the may not qualify screen

No negative values in the total:
Getting a negative value in the formula should display may not qualify message instead of showing negative values

Numbers in other languages:
Arabic numbers are not accepted at the moment (Which is fine considering the offer is for the US)



## Notes:
Deleting or typing a number in fields always send the cursor to the end of the field, why?
Ctrl + Z doesn't work in input fields
If home value is set to 0 calculate value is still enabled, maybe disabling it would be best but not critical
