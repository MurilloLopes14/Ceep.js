import { Tarefa } from "./CriaTarefa.js";

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataMoment = moment(data, 'DD/MM/YY')
    const dataTop = document.createElement('li');
    const conteudo = `<p class="color">${dataMoment.format('DD/MM/YY')}</p>`;

    dataTop.innerHTML = conteudo;

    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YY');
        const diff = dataMoment.diff(dia);
        if (diff == 0){
        dataTop.appendChild(Tarefa(tarefa, id));
        }
    }));

    return dataTop;
}