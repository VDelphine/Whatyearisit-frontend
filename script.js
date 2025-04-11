fetch ('whatyearisit-backend-ka3o0s9vw-delphinevs-projects.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        //if (data.year) {
            console.log('coucou')
            document.querySelector('#year').innerHTML +=
                `<p>${data.year}</p>`
        //}
    })