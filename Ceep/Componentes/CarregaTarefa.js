import {removeDatasRepetidas} from "/Service/Data.js";
import {criaData} from "./CriaData.js";
import { ordenaData } from "../Service/Data.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    lista.innerHTML = " ";
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const dataUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaData(dataUnicas);
    dataUnicas.forEach((dia)=> {
        
        lista.appendChild(criaData(dia));
    })
}