




// Prueba e la función suma

const prueba_suma = () => {
    //Prueba 2+5=7
    
    //Arrange
    const a = 2;
    const b = 5;
    const esperado = 7;

    //Act
    const resultado = suma(a, b);

    //Assert
    console.assert(resultado == esperado, "fallo función suma");

}

prueba_suma();
