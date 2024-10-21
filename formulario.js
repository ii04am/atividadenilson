const numeros = [];
const listaOriginal = document.getElementById('lista-original');
const listaOrdenada = document.getElementById('lista-ordenada');
const numeroInput = document.getElementById('numero');

document.getElementById('inserir').addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    
    if (!isNaN(numero)) {
        numeros.push(numero);
        numeroInput.value = '';
        listaOriginal.textContent = numeros.join(', ');
    } else {
        alert("Por favor, insira um número inteiro válido.");
    }
});

document.getElementById('ordenar').addEventListener('click', () => {
    const numerosOrdenados = selectionSort(numeros.slice()); // Usando cópia do vetor para não alterar o original
    listaOrdenada.textContent = numerosOrdenados.join(', ');
});


function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; 
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }
        // Troca o menor elemento encontrado com o primeiro elemento
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
