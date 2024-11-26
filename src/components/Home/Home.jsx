import { useState } from "react"
import { MainStyle, Copo, Section, Texto, Div } from "./style"

export default function Home() {
//estado para controlar o café selecionado
const[copoSelecionado, setCopoSelecionado] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true"
);
const[corDeFundo, setCorDeFundo] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
);

const trocandoCopo = (imagemCopo,imagemFundo) => {
    setCopoSelecionado(imagemCopo);
    setCorDeFundo(imagemFundo);
}

    return (
        <MainStyle>
            <Texto>
                 <h2>Mais que Café</h2>
                <h2>
                Isso é <span>Starbucks</span>  
                </h2>
            <p>
                A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
            </p>
            <button>SAIBA MAIS</button>
            <Div>
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true" alt="copo laranja pequeno" onClick={
                    () => trocandoCopo(
                        "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true",
                        "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
                    )
                }/>
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true" alt="copo vermelho pequeno" onClick={
                    () => trocandoCopo(
                        "https://github.com/felipeoliveiraa98/starbucks/blob/main/src/assets/images/vermelho2x.png?raw=true",
                        "https://github.com/felipeoliveiraa98/starbucks/blob/main/src/assets/images/ellipseVermelho.png?raw=true"
                    )
                } />
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true" alt="copo amarelo pequeno" onClick={
                    () => trocandoCopo(
                        "https://github.com/felipeoliveiraa98/starbucks/blob/main/src/assets/images/amarelo2x.png?raw=true",
                        "https://github.com/felipeoliveiraa98/starbucks/blob/main/src/assets/images/ellipseAmarelo.png?raw=true"
                    )
                }/>
            </Div>
            </Texto>
            <Section>
                <Copo src={copoSelecionado} alt="" />
                <img src={corDeFundo} alt="" />
            </Section>

        </MainStyle>
    );
}
