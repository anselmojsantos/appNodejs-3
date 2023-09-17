function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Se a lista tiver um elemento ou estiver vazia, já está ordenada.
    }

    const pivot = arr[0]; // Escolha o primeiro elemento como pivô.
    console.log("pivot: ",arr[0])
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elementos menores vão para a esquerda.
            console.log("Esquerdo: ", left);
        } else {
            right.push(arr[i]); // Elementos maiores vão para a direita.
            console.log("Direito: ",right);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]; // Combine as sublistas ordenadas com o pivô no centro.
}

// Exemplo de uso:
const arr = [3, 6, 8, 7, 1, 2, 1, 4, 0, -1];
const sortedArr = quicksort(arr);
console.log(sortedArr); // Resultado ordenado: [1, 1, 2, 3, 6, 8, 10]
