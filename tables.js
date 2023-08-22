const projectsMore = "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D. Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D."
const visualizationMore = "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D. Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D."
const visualizationButtonShowed = "Dowiedz się więcej →"
const visualizationButtonHidden = "Wróć →"
let visualizationOriginal = "Some more info..."
let projectsOriginal = "Some more info..."

document.addEventListener('DOMContentLoaded', function () {
    let vis = document.getElementById('visualizationContent')
    visualizationOriginal = vis.innerText
    projectsOriginal = document.getElementById('projectsContent').innerText
}, false);

const showVisualization = () => {
    let vis = document.getElementById('visualizationContent')

    let visButton = document.getElementById('visualizationButton')
    if(visButton.innerText === visualizationButtonShowed) {
        visButton.innerText = visualizationButtonHidden
        vis.innerText = visualizationMore
    } else {
        visButton.innerText = visualizationButtonShowed
        vis.innerText = visualizationOriginal
    }

}

const showProjects = () => {
    let vis = document.getElementById('projectsContent')

    let visButton = document.getElementById('projectsButton')
    if(visButton.innerText === visualizationButtonShowed) {
        visButton.innerText = visualizationButtonHidden
        vis.innerText = projectsMore
    } else {
        visButton.innerText = visualizationButtonShowed
        vis.innerText = projectsOriginal
    }

}