# JS Intro

| x               |   var    |  let  | const |
|:----------------|:--------:|:-----:|:-----:|
| Redeklaracja    |    ok    |  no   |  no   |   
| Reinicjalizacja |    ok    |  ok   |  no   |   
| Hosting         |    ok    |  no   |  no   |   
| Zasięg          | function | block | block |


## Historia asynchronicznosci w JS

1. Callback (wywolanie zwrotne, ale nie przez nas, tylko przez inny proces)
callback hell - nie moga nic zwracac, wiec trzeba zagniezdzac nawet w nieskonczonosc)

2. Promise (Future w pythonie, techniczna nazwa: coroutine czyli programowanie wspolbiezne)  

3. Generatory (w roku 2016) yield nie przerywa funkcji

4. Async/Await piszemy synchronicznie kod asynchroniczny