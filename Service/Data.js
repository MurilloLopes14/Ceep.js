export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada)== -1){
            datasUnicas.push(data.dataFormatada);
        }
    }));
    return datasUnicas;
}

export const ordenaData = (data) => {
    data.sort((a, b) =>{
        const primeiraData = moment(a, 'DD/MM/YY').format
        ('YYMMDD')
        const segundaData = moment(b, 'DD/MM/YY').format
        ('YYMMDD')
        return primeiraData - segundaData
    })
}