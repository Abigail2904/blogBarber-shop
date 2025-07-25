 // cambiar si desea alterar el orden
        const ordenCorrecto = [4, 2, 3, 1]; 

        document.getElementById('triviaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = [...document.querySelectorAll('.orden-inputs input')];
            const respuesta = inputs.map(input => parseInt(input.value));
            const esCorrecto = respuesta.every((num, idx) => num === ordenCorrecto[idx]);
            const resultado = document.getElementById('resultado');
            if (esCorrecto) {
                resultado.textContent = "¡Ganaste!";
                resultado.style.color = "green";
            } else {
                resultado.textContent = "Perdiste. Intenta de nuevo.";
                resultado.style.color = "red";
            }
            // Limpiar después de 5 segundos
    setTimeout(() => {
        resultado.textContent = "";
        inputs.forEach(input => input.value = "");
    }, 5000);
        });