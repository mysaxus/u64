import React, {useState, useEffect} from 'react';

import './stylesheets/tutorial.css';
import './stylesheets/tutorialtest.css';

import q1basico from './images/questoes/basico/questoes/q1basico.png';
import q2basico from './images/questoes/basico/questoes/q2basico.png';
import q3basico from './images/questoes/basico/questoes/q3basico.png';
import q4basico from './images/questoes/basico/questoes/q4basico.png';

import peao from './images/questoes/basico/peao.png';
import cavalo from './images/questoes/basico/cavalo.png';
import bispo from './images/questoes/basico/bispo.png';
import torre from './images/questoes/basico/torre.png';
import rainha from './images/questoes/basico/rainha.png';
import rei from './images/questoes/basico/rei.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';


export default function TutorialBasic(){

    const {currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    const questions = [
        {
            Img:[q1basico],
            Options: [
                {Text:'Cg5+', isCorrect: false},
                {Text:'Cxe5', isCorrect: false},
                {Text:'De4+', isCorrect: true},
                {Text:'h3', isCorrect: false},
            ],
        },
        {
            Img:[q2basico],
            Options: [
                {Text:'Td6', isCorrect: false},
                {Text:'g4', isCorrect: false},
                {Text:'Tac1', isCorrect: false},
                {Text:'Td8+', isCorrect: true},
            ],
        },
        {
            Img:[q3basico],
            Options: [
                {Text:'Bxf3', isCorrect: false},
                {Text:'Bxd3', isCorrect: true},
                {Text:'d5', isCorrect: false},
                {Text:'Db6', isCorrect: false},
            ],
        },
        {
            Img:[q4basico],
            Options: [
                {Text:'Dxf8+', isCorrect: true},
                {Text:'De8', isCorrect: false},
                {Text:'Td8', isCorrect: false},
                {Text:'Td7', isCorrect: false},
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState(false);

    const [score, setScore] = useState(0);

    const [gain, setGain] = useState(0);

    var rating = '';

    const ranking = (x) => {
        if(x < 1000){
            return "Peao"
        }
        else if(x < 1200){
            return "Cavalo"
        }
        else if(x < 1500){
            return "Bispo"
        }
        else if(x < 1700){
            return "Torre"
        }
        else if(x < 2000){
            return "Rainha"
        }
        else{
            return "Rei"
        }
    }

    const handleNextQuestion = (isCorrect) => {
        if(isCorrect===true){
            setGain(gain + 10)
            setScore(score + 1);
        }
        else{
            setGain(gain - 10)
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setQuestion(true);
        }
    }

    return(
        <div className="tutorial basic">
            <div className="header">
                <h1>Nível básico</h1>
            </div>

            <div className="box">
                <p>Você está acessando a página de nível básico de xadrez. 
                Os tutoriais dessa página são os mais simples e visam ensinar o básico do xadrez. 
                Não se preocupe em entender tudo de uma vez, pois só com a prática será possível 
                treinar o que você verá aqui. Não tenha pressa em subir de nível, pois todos precisam 
                dos conhecimentos que você vai aprender da base, que é esta.</p>

                <p>Quando você acumular pontos suficientes em seu rating, o site vai automaticamente 
                elevar seu nível de jogo e tutoriais mais complexos virão, a medida em que sua melhora
                seja percebida nos exercícios mostrados.</p>
            </div>

            <h2>Movimento das peças</h2>

            <div className="box">
                <p>Nesta seção, vamos ensinar o movimento das peças. Os tabuleiros terão casas circuladas em verde, 
                indicando até onde determinada peça pode se movimentar na posição em que está. Haverá um tabuleiro 
                experimental no final onde você poderá testar e usar as peças da forma como quiser.</p>
            </div>

            <h2>Peão</h2>
            <div className="topic">
                <img src={peao}/>
                <div className="box">
                    <p>O peão é a peça mais abundante do xadrez. 
                    Cada jogador começa com 8 deles (cada um valendo 1 ponto), e não se engane, 
                    são peças que determinam vitórias. Peões só avançam pra frente, 1 casa por vez, 
                    com exceção do primeiro avanço, que pode ser feito com até 2 casas. São as únicas 
                    peças que capturam de forma diferente do movimento em si: peões capturam nas diagonais 
                    superiores, também com 1 casa de alcance. Se um peão cruza o tabuleiro, ele pode ser 
                    promovido para qualquer outra peça (excetuando o rei.)</p>
                </div>
            </div>

            <h2>Cavalo</h2>
            <div className="topic">
                <img src={cavalo} />
                <div className="box">
                    <p>
                        Vamos aprender o cavalo.
                        O movimento do cavalo pode ser a peça mais confusa. 
                        Diferente das outras, ele pode “pular” peças, não tendo 
                        seu movimento obstruído de maneira alguma. O cavalo se movimenta em “L”,
                        ou seja, um movimento de bispo e um movimento de torre. Apesar de ter um 
                        alcance limitado, é uma peça muito forte em posições fechadas, tendo um valor 
                        base de 3.
                    </p>
                </div>
            </div>

            <h2>Bispo</h2>
            <div className="topic">
                <img src={bispo} />
                <div className="box">
                    <p>
                        A próxima peça é o bispo.
                        Cada um dos bispo pode se movimentar em 
                        metade das casas do tabuleiro, por se movimentar diagonalmente. 
                        Um deles nas casas claras e outro nas casas escuras. Assim sendo, o par 
                        dos bispos ativos costumam ser muito fortes para quem os usar bem. Bispos 
                        são melhores utilizados em posições abertas e tem um valor estimado entre 3 e 3,25.
                    </p>
                </div>
            </div>

            <h2>Torre</h2>
            <div className="topic">
                <img src={torre} />
                <div className="box">
                    <p>
                        A primeira peça a ser vista é a torre.

                        Torres são fortes no fim do jogo e tem um valor estimado de 5 no xadrez. 
                        Seus movimentos se a linhas verticais e horizontais. Perceba que peças limitam 
                        sua movimentação. Assim sendo, torres são melhores aproveitadas com poucas peças, 
                        especialmente nas colunas (A a H), o que costuma ocorrer no fim do jogo.
                    </p>
                </div>
            </div>

            <h2>Rainha</h2>
            <div className="topic">
                <img src={rainha} />
                <div className="box">
                    <p>
                        Vamos para uma das melhores peças, a rainha.

                        A rainha é a peça mais forte do jogo. Com um valor de 9, 
                        a rainha pode se movimentar como a torre e o bispo combinados, 
                        sendo uma excelente peça de ataque. Pelo seu alto valor, a rainha 
                        não costuma ser usada no início do jogo, para não estar sujeita a ataques
                        desnecessários. Quase sempre, perder uma rainha por outra peça costuma 
                        significar uma derrota.
                    </p>
                </div>
            </div>
            
            <h2>Rei</h2>
            <div className="topic">
                <img src={rei} />
                <div className="box">
                    <p>
                        Por fim, a peça central do xadrez: o rei.

                        O rei é uma peça frágil, e também a mais importante. 
                        Podendo movimentar-se pra qualquer direção, mas apenas 
                        com o alcance de 1 casa, o rei precisa estar sob proteção 
                        enquanto houver muitas peças no tabuleiro. No fim do jogo, o rei é 
                        muito importante e deve ser ativo no jogo. Sua atuação nesse momento 
                        estima-se valer um total de 4 pontos.
                    </p>
                </div>
            </div>

            <div className="practice">

                {question ? (
                    <div>
                        <div className="box result">
                            <h2>Questões finalizadas</h2>
                            <p>Pontuação alcançada: {score} de {questions.length}</p>
                            <p>Ganho total: {gain}</p> 
                            {users.map((user) => {
                                if(user.email === currentUser.email){

                                    const userDoc = doc(db, "users", user.id)
                                    updateDoc(userDoc, {nivel: true})
                                    updateDoc(userDoc, {rating: user.rating + gain})
                            }})}
                            <a href="/account">Voltar para perfil</a>
                        </div>
                    </div>

                ) : (
                    <div>
                        <h2>Questão {currentQuestion + 1}</h2>
                        {users.map((user) => {
                                if(user.email === currentUser.email){
                                    rating = ranking(user.rating);
                                    return(<div className="rating">
                                        Rating Atual: {user.rating + gain} ({rating})
                                        </div>)
                                }
                            })}
                        <div className="questao">
                            <img src={questions[currentQuestion].Img}/>

                            <div className="options">
                                {questions[currentQuestion].Options.map((option) => (
                                    <button onClick={
                                        () => handleNextQuestion(option.isCorrect)} className="option">
                                            {option.Text}
                                            </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}