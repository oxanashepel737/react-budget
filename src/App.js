import React, {Component} from 'react';
import './App.css';
import moment from 'moment';
import styled from 'styled-components';

const DateButton = styled.button`
color: white;
border: 1px solid white;
border-radius: 50%;
background-color: transparent;
width: 32px;
margin: 3px;
cursor: pointer;
text-align: center;
`;
const DateLine = styled.div`
display: flex;
align-items: center;
`;
const Link = styled.span`
font-family: 'Marmelad';
cursor: pointer;
color: white;
margin:0 8px;
border-button: ${({selected}) => (selected ? '2px solid white' : 'none')};
`;
const Nav = styled.nav`
display: flex;
justify-content: center;
font-size: 25px;
padding: 48px 0 15px;
`;
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment(),
            navSelected: 'incomes'
        };
    }

    handleAddDay = () => {
        this.setState({date: this.state.date.add(1, 'day')})
    };
    handleSubtractDay = () => {
        this.setState({date: this.state.date.subtract(1, 'day')})
    };
    handleNavClick = event => {
       this.setState({navSelected: event.target.getAttribute('name')})
    };

    render() {
        const {date, navSelected} = this.state;
        return (
            <section>
                <header>
                    <h1>Реактивный бютжет</h1>
                    <DateLine>
                        <p>{date.format('DD.MM.YYYY')}</p>
                        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
                        <DateButton onClick={this.handleAddDay}>+</DateButton>
                    </DateLine>
                </header>
                <main>
                    <Nav>
                        <Link
                            name='expanse'
                            onClick={this.handleNavClick}
                            selected={navSelected === 'expanse'}
                        >
                            Расходы сегодня
                        </Link>
                        <Link
                            name='incomes'
                            onClick={this.handleNavClick}
                            selected={navSelected === 'incomes'}
                        >
                            Доходы
                        </Link>
                    </Nav>
                </main>
            </section>
        );
    }
}

export default App;
