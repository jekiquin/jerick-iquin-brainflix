import './PageButton.scss';

function PageButton({ className, value }) {
    return (
        <button className={className}> {value}</button>
    )
}

export default PageButton;