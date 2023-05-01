function Cards(props) {
    return (
        <>
            <ul>
                <li>1- {props.id}</li>
                <li>2- {props.name}</li>
                <li>3-{props.userAccountNumber}</li>
                <li>4-{props.userAccountType}</li>
            </ul>

        </>
    )

}
export default Cards