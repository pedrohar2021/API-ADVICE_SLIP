async function getAdvice(){
    const resp = await fetch ('https://api.adviceslip.com/advice')

    const data = await resp.json()

    document.querySelector('#frase').innerText = data.slip.advice

    console.log(data.slip.advice);
}

const btnGetAdvice = document.querySelector('#get-advice')

btnGetAdvice.addEventListener("click", function (){
    getAdvice()
})