import './Card.css';

function Card(props){ 
    const classes = 'card ' + props.className;
    return (<div className = {classes}>{props.children}</div>); //card container component which will act as a shell around eaither ExpenseItem content or Expenses content
    //props.children contain everything enclosed inside Card tag; for eg. the date, title and amount enlosed inside Card in ExpenseItem

}

export default Card;