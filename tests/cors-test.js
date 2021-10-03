const sendButton = document.getElementById('send');
const responseBlock = document.getElementById('response');
sendButton.addEventListener('click', async () => {
    const reqBody = document.getElementById('reqBody').value
    const reqXTest = document.getElementById('reqXTest').value
    try {
        responseBlock.innerText = await (await fetch('http://localhost:5000/result4/', {
            method: 'POST',
            headers: {'x-test': reqXTest},
            body: reqBody,
        })).text()
    } catch (e) {
        alert(e)
    }


})
