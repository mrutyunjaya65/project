const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()  // Prevent the default form submission

    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#results')

    if(Height === '' || Height<0 || isNaN(Height)){
       result.innerHTML = `please give a valid height ${Height}`
       alert('please give a valid height')
    }
    else if(Weight === '' || Weight<0 || isNaN(Weight)){
        result.innerHTML = `please give a valid Weight ${Weight}`
        alert('please give a valid weight')
    }
    else {
        const bmi = (Weight / ((Height * Height)/ 10000)).toFixed(2)
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}:- Under Weight </span>`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span>${bmi}:- Normal </span>`
        }
        else{
            result.innerHTML = `<span>${bmi}:- Over Weight </span>`
        }
    }
})