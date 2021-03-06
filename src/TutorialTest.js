import React, {useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';

import './stylesheets/style.css';
import './stylesheets/tutorialtest.css';

import q1teste from './images/questoes/nivel/q1nivel.png';
import q2teste from './images/questoes/nivel/q2nivel.png';
import q3teste from './images/questoes/nivel/q3nivel.png';
import q4teste from './images/questoes/nivel/q4nivel.png';
import q5teste from './images/questoes/nivel/q5nivel.png';

import {db} from './services/firebase';
import { collection, getDocs, updateDoc, doc} from 'firebase/firestore';

function TutorialTest(){

    const {currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    var rating;

    useEffect(() =>  {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, [])

    function calcRating(x){
        switch(x){
            case 5:
                return 2000;
                break;
            case 4:
                return 1800;
                break;
            case 3:
                return 1600;
                break;    
            case 2:
                return 1400;
                break;
            case 1:
                return 1200;
                break;
            case 0:
                return 1000;
        }
    }

    const questions = [
        {
            Img: [q1teste],
            Options: [
                {Text: 'Df8+', isCorrect: true},
                {Text: 'Dxg3', isCorrect: false},
                {Text: 'hxg3', isCorrect: false},
                {Text: 'Dxa7+', isCorrect: false},
            ],
        },
        {
            Img: [q2teste],
            Options: [
                {Text: 'Cxf3+', isCorrect: false},
                {Text: 'Dxe1+', isCorrect: true},
                {Text: 'Dh3', isCorrect: false},
                {Text: 'Cb3', isCorrect: false},
            ],
        },
        {
            Img: [q3teste],
            Options: [
                {Text: 'Cxd5', isCorrect: true},
                {Text: 'Cxe7', isCorrect: false},
                {Text: 'Tac1', isCorrect: false},
                {Text: 'Txd5', isCorrect: false},
            ],
        },
        {
            Img: [q4teste],
            Options: [
                {Text: 'Bxd7', isCorrect: false},
                {Text: 'Txd7+', isCorrect: false},
                {Text: 'b7', isCorrect: false},
                {Text: 'Bb7', isCorrect: true},
            ],
        },
        {
            Img: [q5teste],
            Options: [
                {Text: 'f3', isCorrect: false},
                {Text: 'Be5', isCorrect: true},
                {Text: 'Bd4', isCorrect: false},
                {Text: 'Rxg2', isCorrect: false},
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

        const handleNextQuestion = (isCorrect) => {

            if(isCorrect===true){
                setScore(score + 1);
            }

            const nextQuestion = currentQuestion + 1;
            if(nextQuestion < questions.length){ 
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }

    return(
        <div className="tutorial">
            <div className="header">
                <h1>Tutoriais</h1>
            </div>
            <div className="niveltestintro">
                <h2>Teste de nivelamento</h2>
                <p>Se est?? lendo isso, significa que ainda n??o tem um n??vel de xadrez definido. 
                    Portanto, deve-se fazer o teste de nivelamento, que consiste em um pequeno question??rio para 
                    avaliar sua habilidade inicial no xadrez. Dependendo de seu resultado, tutoriais de diferentes
                    n??veis ser??o ofertados.
                </p>
                <p>Segue abaixo o seu teste de nivelamento.</p>
            </div>

            <div className="legenda box">
                <h2>Legenda</h2>
                    <span>
                        Se voc?? entende os c??digos do tabuleiro de xadrez, pode pular este breve tutorial e ir para as quest??es.
                    </span>

                    <p>Cabe dizer que em xadrez, existem C??DIGOS para os lances. N??o se preocupe, n??o s??o nada complicados
                    e s??o intuitivos.</p>
                    <p>Para come??ar, vale dizer que o tabuleiro de xadrez ?? composto de 64 (aha!) casas. As casas
                        s??o referidas com letras de <span>A at?? H em suas colunas</span> e com n??meros de <span>1 a 8 em suas linhas</span>. Os c??digos podem ser vistos <span>na
                            extremidade do tabuleiro.</span> Assim sendo, os movimentos sempre ser??o referentes a casa da coordenada descrita.
                    </p>

                    <p>Abaixo, segue a lista de c??digos e seus significados: </p>

                    <ul>
                        <li><span>R</span> = rei; <span>D</span> = dama; <span>T</span> = torre;<span> B</span> = bispo; <span>C</span> = cavalo</li>
                        <li>Vale dizer que quando n??o tem nenhuma pe??a no c??digo, o movimento ?? de <span>pe??o</span></li>
                        <li><span>Rb4</span> = Rei vai para a casa de b4</li>
                        <li><span>Bc1</span> = Bispo vai para a casa de c1</li>
                        <li><span>a4</span> = Pe??o (subentende-se que da coluna A) vai para a4</li>
                        <li><span>f7</span> = Pe??o (subentende-se que da coluna F) vai para f7</li>
                    </ul>

                    <p>Existem movimentos especiais que devem ser representados tamb??m:</p>

                    <ul>
                        <li><span>x</span>: significa a captura de uma pe??a</li>
                        <li><span>+</span>: significa xeque</li>
                        <li><span>#</span>: significa xeque-mate</li>
                        <li><span>O-O</span>: significa roque curto (com a torre de H)</li>
                        <li><span>O-O-O</span>: significa roque longo (com a torre de A)</li>
                        <li><span>Rxb4</span> = Rei toma (uma pe??a) em b4</li>
                        <li><span>Bxc3</span> = Bispo toma (uma pe??a) em c3</li>
                        <li><span>dxe4</span> = Pe??o da coluna D toma (uma pe??a) em e4</li>
                        <li><span>hxe4</span> = Pe??o da coluna H toma (uma pe??a) em e4</li>
                        <li><span>Dh5+</span> = Dama vai para h5 e faz xeque</li>
                        <li><span>Td1+</span> = Torre vai para d1 e faz xeque</li>
                        <li><span>Cf7#</span> = Cavalo vai para f7 e faz xeque-mate</li>
                    </ul>

                    <p><span>Se voc?? entendeu at?? aqui, j?? sabe como descrever a maior parte dos movimentos do jogo.</span></p>
                        <p>Existem ainda combina????es de s??mbolos e mais possibilidades. Quando mais de uma pe??a do mesmo tipo pode
                        ir para a casa de determinado movimento, especifica-se por meio da linha ou coluna em que ela est??. 
                        Isso geralmente pode ocorrer com <span>torres e cavalos</span>, que s??o pares de pe??as que podem por vezes ir pra uma mesma
                        casa determinada.</p>

                    <ul>
                        <li><span>Tad1</span> = A torre que est?? na coluna A vai para d1. (A outra torre poderia ir para d1)</li>
                        <li><span>C3f4</span> = O cavalo que est?? na linha 3 vai para f4. (O outro cavalo poderia ir para f4)</li>
                    </ul>

                    <p>
                        Por ??ltimo, ?? poss??vel fazer uma mistura de movimentos! N??o se preocupe com o tempo necess??rio para
                        entender esses c??digos. <span>Eles ficar??o mais e mais naturais na medida em que se joga.</span> Por mais confuso
                        que pode parecer, vai ser como andar de bicicleta!
                    </p>
                    <ul>
                        <li><span>Cxd3+</span> = Cavalo captura em d3 e faz xeque</li>
                        <li><span>Bxh7+</span> = Bispo captura em h7 e faz xeque</li>
                        <li><span>Tdxf8+</span> = A torre que est?? na coluna D toma em f8 e faz xeque </li>
                        <li><span>C6xg4#</span> = O cavalo que est?? na linha 6 toma em g4 e faz xeque-mate </li>
                    </ul>
            </div>

            <div className="niveltest">
                
                {showScore ? (
                    <div className="box result">
                        <h2>Teste finalizado</h2>
                        <p>Pontua????o alcan??ada: {score} de 5</p> 
                        {users.map((user) => {
                            if(user.email === currentUser.email){
                                rating = calcRating(score)
                                const userDoc = doc(db, "users", user.id)
                                updateDoc(userDoc, {nivel: true})
                                updateDoc(userDoc, {rating: rating})
                        }})}
                        <a href="/account">Voltar para perfil</a>
                    </div>
               ) :
                    (
                    <div>
                        <h2>Quest??o {currentQuestion + 1}</h2>
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
                    </div>)}
            </div>
        </div>
    );
}

export default TutorialTest;