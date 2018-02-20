

let number1 = document.getElementById('first_number')
            let number2 = document.getElementById('second_number')
            let result = document.getElementById('validate')

            result.addEventListener('click',function () {
                let divide = number1.value / number2.value
                alert(divide)
            })

        