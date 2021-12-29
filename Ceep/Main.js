import {handleNovoItem} from "./Componentes/CriaTarefa.js";
import {carregaTarefa} from "./Componentes/CarregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();