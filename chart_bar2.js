// ----------- SETUP BLOCK ------------
    // Le bloc de configuration est également considéré comme le bloc de données. 
    // Ce bloc est essentiellement un const (variable constante) composé de
    //  plusieurs objets javascript liés aux données. 
    // Il peut s'agir de points de données, d'étiquettes, de couleurs d'arrière-plan,
    //  de couleurs de survol, etc.
const ctx = document.getElementById('myChart').getContext('2d');
console.log(ctx.height);
const data = {
    labels: ['Groupe 1', 'Groupe 2', 'Groupe 3'],
    datasets: [{
        label: '% de rappel',
        data: [17, 25, 39],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
            
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 2
        }]
    }


const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Groupe 1', 'Groupe 2', 'Groupe 3'],
        datasets: [{
            label: '% de rappel',
            data: [17, 25, 39],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
                }
            ,
        plugins: {
            title: {
                display: true,
                text: "LE QUESTIONNEMENT EST PLUS EFFICACE QUE L'ÉTUDE",
                font: {
                    size: 20,
                }
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 19
                    }
                }
            }
        }
    }
}