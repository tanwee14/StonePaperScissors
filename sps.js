const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');
const optionImage = document.querySelectorAll('.option_image');

optionImage.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        optionImage.forEach((image2, index2) => {
            if (index !== index2) {
                image2.classList.remove('active');
            }
        });

        // Ensure e.target is an image or contains an image
        let imgElement = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
        
        // If imgElement is found, update the userResult's src
        if (imgElement) {
            let imgSrc = imgElement.src;
            userResult.src = imgSrc;
        }

        let randomNumber=Math.floor(Math.random()*3);
        //console.log(randomNumber);
        //create array of cpuimages
        let cpuImages=["rock.jpg","paper.png","scissors.png"];
        cpuResult.src=cpuImages[randomNumber];

        let cpuValue=["R","P","S"][randomNumber];
        let userValue=["R","P","S"][index];

        let outcomes={
            RR : "DRAW",
            PP : "DRAW",
            SS : "DRAW",
            RP : "CPU",
            RS : "YOU",
            PS : "CPU",
            PR : "YOU",
            SP : "YOU",
            SR : "CPU"
        };

        let outcomeValue=outcomes[userValue + cpuValue];
        
        result.textContent = userValue === cpuValue ? "MATCH DRAW !!" : `${outcomeValue} WON !!`;
        console.log(outcomeValue);
        
    });
});
