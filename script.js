fetch ('https://whatyearisit-backend-gamma-taupe.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        //if (data.year) {
            console.log('coucou')
            document.querySelector('#year').innerHTML +=
                `<p>${data.year}</p>`
        //}
    })