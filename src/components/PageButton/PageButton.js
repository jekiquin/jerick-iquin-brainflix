import './PageButton.scss';

function PageButton({ submit, className, value }) {
    let button = submit 
        ? <button type="submit" className={className}> {value}</button>
        : <button className={className}> {value}</button>
    return (
        <>
            {button}
        </>
    )
}

export default PageButton;