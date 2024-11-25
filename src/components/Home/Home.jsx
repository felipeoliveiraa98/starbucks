import { MainStyle, Copo, Section } from "./style"

export default function Home() {
    return (
        <MainStyle>
            <section>
                 <h2>Mais que Café</h2>
                <h2>
                Isso é <span>Starbucks</span>  
                </h2>
            <p>
                A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
            </p>
            <button>SAIBA MAIS</button>
            <div>
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true" alt="copo laranja pequeno" />
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true" alt="copo vermelho pequeno" />
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true" alt="copo amarelo pequeno" />
            </div>
            </section>
            <Section>
                <Copo src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true" alt="" />
                <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true" alt="" />
            </Section>

        </MainStyle>
    )
}