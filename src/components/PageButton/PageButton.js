import './PageButton.scss';

function PageButton(props) {
    return (
        <button className={props.className}> {props.value}</button>
    )
}

export default PageButton;