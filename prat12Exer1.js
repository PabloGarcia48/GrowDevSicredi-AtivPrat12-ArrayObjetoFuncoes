/*
Crie um arquivo com o script necessário para resolução do exercício considerando o seguinte array:
1. Imprima no console a quantidade de pessoas Total.
2. Imprima no console a quantidade de pessoas do sexo Feminino.
3. Imprima no console a soma do salário de todas as pessoas.
4. Imprima no console a média do salário de todas as pessoas.
5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
10. Imprima os nomes utilizando o MAP
*/
const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];

    // 1. Imprima no console a quantidade de pessoas Total.
    console.log(`1. O total de pessoas é ${data.length};`)
    document.write(`1. O total de pessoas é ${data.length};<br>`)

    // 2. Imprima no console a quantidade de pessoas do sexo Feminino.
    const femaleTotal = data.filter(person => person.sexo === 'F')
    console.log(`2. O total de pessoas do sexo feminino é: ${femaleTotal.length}`);
    document.write(`2. O total de pessoas do sexo feminino é: ${femaleTotal.length};<br>`);

    // 3. Imprima no console a soma do salário de todas as pessoas.
    const totalSalary = data.reduce((accumulator, person) => accumulator + person.salario, 0)
    console.log(`3. A soma de todos os salários é: R$${totalSalary.toFixed(2)}`)
    document.write(`3. A soma de todos os salários é: R$${totalSalary.toFixed(2)};<br>`)

    // 4. Imprima no console a média do salário de todas as pessoas.
    const averageSalary = totalSalary / data.length
    console.log(`4. A média dos salários é: R$${averageSalary.toFixed(2)}`);
    document.write(`4. A média dos salários é: R$${averageSalary.toFixed(2)};<br>`);

    // 5. Imprima no console a soma do salário de todas as pessoas do sexo Masculino
    const totalSalaryMale = data.filter(person => person.sexo === 'M')
                                .reduce((accumulator, person) => accumulator + person.salario, 0);
        console.log(`5. A soma do salário das pessoas do sexo masculino é: R$${totalSalaryMale}`);
        document.write(`5. A soma do salário das pessoas do sexo masculino é: R$${totalSalaryMale};<br>`);

    // 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
    const maleTotal = data.filter(person => person.sexo === 'M')
    const averageSalaryMale = totalSalaryMale / maleTotal.length
    console.log(`6. A média do salário das pessoas do sexo masculino é: R$${averageSalaryMale.toFixed(2)}`);
    document.write(`6. A média do salário das pessoas do sexo masculino é: R$${averageSalaryMale.toFixed(2)};<br>`);

    // 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
    const isHighSalary = data.some(person => person.salario > 7000);
    console.log(`7. Existe salário maior do que R$7000: ${isHighSalary}`);
    document.write(`7. Existe salário maior do que R$7000: ${isHighSalary};<br>`);

    // 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
    const nameTofindIndex = 'Eva Trindade'
    const findIndexName = data.findIndex(person => person.nome === nameTofindIndex)
    console.log(`8. O índice do nome "${nameTofindIndex}" é: ${findIndexName}`);
    document.write(`8. O índice do nome "${nameTofindIndex}" é: ${findIndexName};<br>`);

    // 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
    const nameTofind = 'Silva'
    function nameTofindFilter(person) {
        return person.nome.includes(nameTofind);
    }
    
    const findedName = data.filter(nameTofindFilter);
    
    document.write(`9. Pessoas que contenham o nome "${nameTofind}":`)
    document.write('<ul>');    
    findedName.forEach(person => {
        document.write(`<li>${person.nome}</li>`);
    });    
    document.write('</ul>');
    console.log(findedName)


    // 10. Imprima os nomes utilizando o MAP
    const allNames = data.map(person => person.nome);
    console.log(`10. Nomes: ${allNames}`);
    document.write(`10. Nomes: ${allNames}`);
