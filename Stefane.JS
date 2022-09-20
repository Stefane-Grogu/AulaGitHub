    class roupa{

        constructor(linha, agulha, tesoura, tecido){
            this.drima = linha
            this.singer = agulha
            this.mundial = tesoura
            this.viscose = tecido
        }

        fazerRoupa(){

            if(this.drima == 3, this.singer == 1, this.mundial == 1, this.viscose == 4){

                console.log("roupa linda e elegante feita")

            }else{

                console.log("os materiais nao sao suficientes, nao tem como fazer a roupa")

            }

        }

    }

    const Roupa = new roupa(3, 1, 1, 4)

    Roupa.fazerRoupa()

    